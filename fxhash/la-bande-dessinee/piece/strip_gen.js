// Utilities
// https://stackoverflow.com/questions/7545641/how-to-create-multidimensional-array
generate_array = arr => {
    let str = 'return ', l = arr.length;
    arr.forEach((v, i) => {
        str += i < l-1 ? `Array(${v}).fill().map(a => ` : `Array(${v}` + ')'.repeat(l);
    });
    return Function(str)();
}
// generate_array([4,5,6]) // Generates a 4x5x6 Array

// Default config 600ppi
function config_default_600ppi_c() {
	this.useServer = false;

	this.outputSmallSize = false;
	this.smallSize = 384;

	this.autoplay = false;
	this.pxDensity = 1;

	this.gridW = 4;
	this.gridH = 4;

	this.maxCellW = 4;
	this.maxCellH = 3;

	this.numBackgrounds = 3;

	this.allowVerticalPanels = true;

	// PRINT_PPI specifies both the output resolution AND the resolution of input images
	this.printPPI = 600;

	this.cellSizeInches = 0.75;
	this.printMarginInches = 0.125;

	// How big should the comic appear on screen
	// with 600 ppi, 0.24 looks right on MPB screen
	this.screenScalePcent = 0.24;

	this.imgSrcFolder = "data/600ppi";

	this.useSimpleFilename = false;
	this.autosave = false;

	this.coordinateScale = 1.0;

    // There are 4 different frame drawings per frame size (for visual variation)
    this.num_frame_variations = 4;    
}

function constants_c(config) {
    this.print_resolution = config.printPPI / config.pxDensity;
    this.print_w_inches = (config.cellSizeInches * config.gridW) + (config.printMarginInches * 2);
    this.print_h_inches = (config.cellSizeInches * config.gridH) + (config.printMarginInches * 2);
    
    this.cell_size_px = Math.floor(config.cellSizeInches * this.print_resolution);
    this.print_margin_px = Math.floor(config.printMarginInches * this.print_resolution);
    this.print_w_px = Math.floor(this.print_w_inches * this.print_resolution);
    this.print_h_px = Math.floor(this.print_h_inches * this.print_resolution);
    
    this.screen_scale = config.screenScalePcent * config.pxDensity;
    this.screen_w = Math.floor(this.print_w_px * this.screen_scale);
    this.screen_h = Math.floor(this.print_h_px * this.screen_scale);
    //this.screen_w = Math.min(windowWidth, windowHeight);
    //this.screen_h = Math.min(windowWidth, windowHeight);
    this.screen_resolution = Math.floor(this.print_resolution * this.screen_scale);
}

// simple structure for specifying an integer range
function range_c(min, max) {
	this.min = min;
	this.max = max;

	this.scale = function(scale) {
		this.min = ceil(this.min * scale);
		this.max = ceil(this.max * scale);
	}

	this.description = function() {
		return "min: " + this.min + ", max: " + this.max;
	}
}

function image_data_c(  filename, focalArea,
                        minWidth, minHeight, 
                        anchor, useHorizon,
                        horizonMin, horizonMax) {
	this.filename = filename;
	this.focalArea = focalArea;  // frame_c
	this.minWidth = minWidth;
	this.minHeight = minHeight;
	this.anchor = anchor;
	this.useHorizon = useHorizon;
	this.horizonRange = new range_c(horizonMin, horizonMax);

	this.scale = function(scale) {
		if (this.focalArea != null) {
            this.focalArea.scale(scale);
        }
		this.horizonRange.scale(scale);
	}

	this.description = function() {
		var str = this.filename;
		if (this.focalArea != null){
			str += "\n - " + this.focalArea.description();
		} else {
			str += "\n - no focal area";
		}
		str += "\n - " + this.minWidth;
		str += "\n - " + this.minHeight;
		str += "\n - " + this.anchor;
		return str;
	}

}

// data structure for defining a simple frame
function frame_c() {
	this.width = 0;
	this.height = 0;
	this.x = 0;
	this.y = 0;

	this.init = function(x, y, w, h, pixel_density) {
		this.x = x / pixel_density;
		this.y = y / pixel_density;
		this.width = w / pixel_density;
		this.height = h / pixel_density;
	}

	// Frame(JSONObject obj, int pixelDensity) {
	// 	this.x = obj.getInt("x") / pixelDensity;
	// 	this.y = obj.getInt("y") / pixelDensity;
	// 	this.width = obj.getInt("width") / pixelDensity;
	// 	this.height = obj.getInt("height") / pixelDensity;
	// }

	this.init_from_string = function(coord_string, pixel_density){
		var coords = split(coord_string, ',').map(Number);
		if (coords.length == 4) {
			this.x = Math.floor(coords[0] / pixel_density);
			this.y = Math.floor(coords[1] / pixel_density);
			this.width = Math.floor(coords[2] / pixel_density);
			this.height = Math.floor(coords[3] / pixel_density);
		} else {
			alert("- ERROR: not enough coordinates in focal area data");
            exit();
		}
	}

	this.scale = function(scale) {
		this.x *= scale;
		this.y *= scale;
		this.width *= scale;
		this.height *= scale;
	}

	this.description = function() {
		return "x: " + this.x + ", y: " + this.y + ", w: " + this.width + ", h: " + this.height;
	}
}

function frame_size_c(w, h) {
	this.width = w;
	this.height = h;
}

function asset_c(config) {
    var _this = this;
    this.black_bg_id = 1;
    this.frames = generate_array([config.maxCellW, config.maxCellH, config.num_frame_variations]);
    this.frames_bg = generate_array([config.maxCellW, config.maxCellH, config.num_frame_variations]);
    this.images_table = null;
    this.images = null;
    this.image_outlines = null;
    this.image_datas = null;
    this.horizon_image = null;
    this.horizon_outline = null;
    this.backgrounds = generate_array([config.numBackgrounds]);
    this.images_to_load = 0;

    this.preload_frames = function() {
		for(var w = 1; w <= config.maxCellW; w++) {
			for(var h = 1; h <= config.maxCellH; h++) {
				for(var v = 1; v <= config.num_frame_variations; v++) {
					var img_name = w + "x" + h + "-" + v + ".png";
					var f = loadImage(config.imgSrcFolder + "/frames/" + img_name);
					f.pixelDensity = config.pxDensity;
					this.frames[w-1][h-1][v-1] = f;

					var bg = loadImage(config.imgSrcFolder + "/frameBGs/" + img_name);
					bg.pixelDensity = config.pxDensity;
					this.frames_bg[w-1][h-1][v-1] = bg;
				}
			}
		}
    }

    this.setup_table_data = function() {
        var table = this.images_table;
        var num_images = table.getRowCount();
        this.images = generate_array([num_images]);
        this.image_outlines = generate_array([num_images]);
        this.image_datas = generate_array([num_images]); 
        
        var id = 0;
		for (var row of table.rows) {
			var filename = row.getString("filename");
			if (filename.length < 1) {
				alert(" - ERROR: missing filename for row: " + id);
				exit();
			}
			//if(PRINT_IMAGE_DATA) println("image id: " + id);
			var focal_area_str = row.getString("focalArea");
			var focal_area = null;
			if (focal_area_str.length > 0) {
			 	focal_area = new frame_c();
                focal_area.init_from_string(focal_area_str, config.pxDensity);
			}

			var imgData = new image_data_c(filename, focal_area,
                Math.floor(row.get("minWidth")), Math.floor(row.get("minHeight")), Math.floor(row.get("anchor")),
			 	Boolean(row.get("useHorizon")),
			 	Math.floor(row.get("horizonMin")) / config.pxDensity, Math.floor(row.get("horizonMax")) / config.pxDensity);

			imgData.scale(config.coordinateScale);

			// //if(PRINT_IMAGE_DATA) println(imgData.description());
			this.image_datas[id] = imgData;
			id++;
		}
    }

    this.preload_images_table = function() {
        this.images_table = loadTable("data/assets.csv", "csv", "header");
    }

    this.preload_horizon_images = function() {
        this.horizon_image = loadImage(config.imgSrcFolder + "/images/horizon.png");
		this.horizon_outline = loadImage(config.imgSrcFolder + "/imageOutlines/horizon.png");
    }

    this.set_pixel_density = function(img) {
		img.pixelDensity = config.pxDensity;
		img.width /= config.pxDensity;
		img.height /= config.pxDensity;
	}

    this.setup_horizon_images = function() {
        this.set_pixel_density(this.horizon_image);
        this.set_pixel_density(this.horizon_outline);
    }

	function read_color_from_image(image, x, y) {
		var index = (x + y * image.width) * 4;
		return [ image.pixels[index], 
				 image.pixels[index + 1], 
				 image.pixels[index + 2],
				 image.pixels[index + 3] ];
	}

	function write_color_to_image(image, x, y, pixel) {
		var index = (x + y * image.width) * 4;

		image.pixels[index] = pixel[0];
		image.pixels[index + 1] = pixel[1];
		image.pixels[index + 2] = pixel[2];
		image.pixels[index + 3] = pixel[3];
	}

	// P5.js expects alpha channel to mask while Processing takes the color
	// from the image, so we convert color -> alpha
	function adjust_frame_bg_mask_image(img) {
		img.loadPixels();

		for (y = 0; y < img.height; y++) {
			for (x = 0; x < img.width; x++) {
				var pixel = read_color_from_image(img, x, y);
				var sum = pixel[0] + pixel[1] + pixel[2];
				pixel[3] = int((pixel[0] + pixel[1] + pixel[2]) / 3);
				write_color_to_image(img, x, y, pixel);
			}
		}
		
		img.updatePixels();
	}

	this.setup_adjust_frame_bgs_mask_images = function() {
		for (var frames_bgX of this.frames_bg) {
			for (var frames_bgY of frames_bgX) {
				for (var frames_bgZ of frames_bgY) {
					adjust_frame_bg_mask_image(frames_bgZ);
				}
			}
		}
	}

    this.setup_load_all_images = function() {
        var _this = this;
        var success_callback = function(image) {
            _this.set_pixel_density(image);
            _this.images_to_load--;
        }
        var error_callback = function() {
            _this.images_to_load--;
            alert("error loading image");
            exit();
        }        
        for (var k = 0; k < this.image_datas.length; k++) {
            var full_img_path = config.imgSrcFolder + "/images/" + this.image_datas[k].filename;
            this.images_to_load++;
            this.images[k] = loadImage(full_img_path, success_callback, error_callback);
            var full_outline_path = config.imgSrcFolder + "/imageOutlines/" + this.image_datas[k].filename;
            this.images_to_load++;
            this.image_outlines[k] = loadImage(full_outline_path, success_callback, error_callback);
        }
        for (var k = 0; k < config.numBackgrounds; k++) {
            var background_img_path = config.imgSrcFolder + "/backgrounds/bg" + (k+1) + ".png";
            this.images_to_load++;
            this.backgrounds[k] = loadImage(background_img_path, success_callback, error_callback);
        }
    }

    this.are_all_images_ready = function() {
        return (this.images_to_load == 0);
    }

    this.get_random_image_id_for_panel_size = function(w, h){
		var minW = 0;
		var minH = 0;
		var id;

		do {
			id = Math.floor(random(0, this.images.length));
			minW = this.image_datas[id].minWidth;
			minH = this.image_datas[id].minHeight;
		} while(w < minW || h < minH);

		return id;
	}

    this.get_background_image = function(id) {
		if(this.backgrounds[id] == null){
			alert("Background image not preloaded?!");
            exit();
		}

		return this.backgrounds[id];
	}

	this.get_image_for_id = function(id) {
		if (this.images[id] == null) {
			alert("Image not preloaded?!");
            exit();
		}
		return this.images[id];
	}
    
    this.get_outline_for_image_id = function(id) {
		return this.image_outlines[id];
	}

	this.get_focal_area_for_image_id = function(id) {
		return this.image_datas[id].focalArea;
	}

    this.get_anchor_for_image_id = function(id) {
		return this.image_datas[id].anchor;
	}

    this.should_use_horizon_for_image_id = function(id) {
		return this.image_datas[id].useHorizon;
	}

    this.get_horizon_range_for_image_id = function(id) {
		return this.image_datas[id].horizonRange;
	}

    this.get_random_background_id = function() {
		return Math.floor(random(0, config.numBackgrounds));
	}
}

var config = new config_default_600ppi_c();
var asset = new asset_c(config);
var constants = new constants_c(config);
var full_res_buffer = null;
var cells = null;
var panels = null;

function clear_buffer() {
	full_res_buffer.background(255);
}

function draw_frame_to_buffer(img, x, y) {
    full_res_buffer.push();
	full_res_buffer.translate(constants.print_margin_px, constants.print_margin_px);
	full_res_buffer.image(img, x * constants.cell_size_px, y * constants.cell_size_px);
    full_res_buffer.pop();
}

function reset() {
    clear_buffer();
	cells = generate_array([config.gridH, config.gridW]);
	panels = [];
}

function choose_frame_for_position(x, y) {
	var nextCell = x;
	var availableW = 0;
	while (cells[y][nextCell] == null) {
		availableW++;
		nextCell++;
		if(nextCell >= config.gridW) break;
	}

	availableW = min(availableW, config.gridW);
	var availableH = min(config.gridH - y, config.gridH);
	var w = Math.floor(random(1, availableW + 1));
	var h = Math.floor(random(1, availableH + 1));

	w = min(w, config.maxCellW);
	if (!config.allowVerticalPanels) {
        h = min(w, h);
    }
	h = min(h, config.maxCellH);

	return new frame_size_c(w, h);
}

function mark_cells(shape_id, x, y, w, h) {
	for (var row=y; row < y+h; row++) {
		for (var col=x; col < x+w; col++) {
			cells[row][col] = shape_id;
		}
	}
}

function choose_frames() {
    reset();
	var shape_id = 1;
	for (var y=0; y < config.gridH; y++) {
		for (var x=0; x < config.gridW; x++) {
			var thisCellIsEmpty = (cells[y][x] == null);
			if (!thisCellIsEmpty) {
                continue;
            }

			var frame_size = choose_frame_for_position(x, y);
			mark_cells(shape_id, x, y, frame_size.width, frame_size.height);

			var p = new panel_c(config, constants, asset, x, y, frame_size.width, frame_size.height);
			panels.push(p);

			draw_frame_to_buffer(p.get_graphics(), p.x, p.y);
			shape_id++;
		}
	}    
}

function randomize() {
	choose_frames();
}

// Preload all hardcoded assets here so that they are available in 
// the setup() function.
function preload() {
    asset.preload_frames(config);
    asset.preload_images_table();
    asset.preload_horizon_images();
}

function setup() {
    constants.screen_w = Math.min(windowWidth, windowHeight);
    constants.screen_h = Math.min(windowWidth, windowHeight);

	seed=int(fxrand() * 100000000); // FXHASH seed rand
	randomSeed(seed); 

	asset.setup_adjust_frame_bgs_mask_images();
    asset.setup_table_data();
    asset.setup_horizon_images();
    asset.setup_load_all_images();
    
    full_res_buffer = createGraphics(constants.print_w_px, constants.print_h_px);

    createCanvas(windowWidth, windowHeight);
}

var first_time = true;

function draw() {
    if (!asset.are_all_images_ready()) {
        background(255, 255, 255);
        return;
    } else {
        if (first_time) {
            randomize();
            first_time = false;
        }
        background(0);
    }
    
    clear_buffer();

    for(var i = 0; i < panels.length; i++) {
		var p = panels[i];
		draw_frame_to_buffer(p.get_graphics(), p.x, p.y);
	}

	image(full_res_buffer, (windowWidth - constants.screen_w) / 2, (windowHeight - constants.screen_h) / 2, constants.screen_w, constants.screen_h);
	noLoop();
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	constants.screen_w = Math.min(windowWidth, windowHeight);
    constants.screen_h = Math.min(windowWidth, windowHeight);
}