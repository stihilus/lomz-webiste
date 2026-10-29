// each Panel can construct itself, given a width and height
// returns composite image from getGraphics() to add to comic layout
function panel_c(config, constants, assets, x, y, w, h) {

	this.frame_margin_px = Math.floor(30 * config.coordinateScale);
	this.frame_margin_pt = this.frame_margin_px / config.pxDensity;

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.ptWidth = w * constants.cell_size_px;
	this.ptHeight = h * constants.cell_size_px;

    // not used or built in somethings?
    // pixelWidth = ptWidth * config.pxDensity;
	// pixelHeight = ptHeight * config.pxDensity;

	var _bgImg;
	var _contentGfx;
	var _frameImg;
	var _compositeGfx;

	this.init = function() {
		this.choose_graphics();
		this.composite_panel(this.width, this.height);
	}

	this.get_graphics = function() {
		return _compositeGfx;
	}

	this.position_focal_area_in_panel = function(focalArea, panelW, panelH) {
		var px = Math.floor(random(this.frame_margin_pt, panelW - focalArea.width - this.frame_margin_pt));
		var py = Math.floor(random(this.frame_margin_pt, panelH - focalArea.height - this.frame_margin_pt));
		return createVector(px - focalArea.x, py - focalArea.y);
	}

	// PVector positionFocalAreaInPanelBelowPosition(Frame focalArea, int panelW, int panelH, PVector, pos){

	// }

	this.adjust_position_for_anchor_in_panel = function(pos, anchor, imgSize, panelSize) {
		switch(anchor){
			case "top":
				pos.y = min(pos.y, 0);
				break;
			case "right":
				pos.x = max(panelSize.width - imgSize.width, pos.x);
				break;
			case "bottom":
				pos.y = max(panelSize.height - imgSize.height, pos.y);
				break;
			case "left":
				pos.x = min(pos.x, 0);
				break;
		}

		return pos;
	}

	this.position_horizon_for_image_id = function(imgId, imgY, frameHeight) {
		var range = assets.get_horizon_range_for_image_id(imgId);
		var min = range.min;
		var max = range.max;

		// 0 in range means use frame bounds
		if(min != 0){
			min += imgY;
		}

		if(max == 0) {
			max = frameHeight;
		} else {
			max += imgY;
		}

		var pos = Math.floor(random(min, max));
		return pos;
	}

	this.choose_content = function() {
		var gfx = createGraphics(this.ptWidth, this.ptHeight);
		var imageGfx = createGraphics(this.ptWidth, this.ptHeight);
		var outlineGfx = createGraphics(this.ptWidth, this.ptHeight);

		outlineGfx.background(255, 255, 255, 0);

		var numImages = 1;
		var horizonPos = 0;
		var useHorizon = false;
		var useOutlines = false;
		var prevBottomY = 0;
		var prevTopY = 0;

		for (var i=0; i < numImages; i++) {
			var imageId = assets.get_random_image_id_for_panel_size(width, height);
			// print(" - " + assets.getNameForImageId(imageId));
			var img = assets.get_image_for_id(imageId);
			var imgOutline = assets.get_outline_for_image_id(imageId);
			var focalArea = assets.get_focal_area_for_image_id(imageId);

			var pos;
			if(focalArea == null){
				// no focalArea, use the full image
				// focalArea = new Frame(0,0, img.pixelWidth, img.pixelHeight, config.pxDensity);

				// no focalArea, center the image
				var px = Math.floor((gfx.width / 2 - img.width / 2) );
				var py = Math.floor((gfx.height / 2 - img.height / 2));
				pos = createVector(px, py);

			} else {
				pos = this.position_focal_area_in_panel(focalArea, gfx.width, gfx.height);
			}
			var anchor = assets.get_anchor_for_image_id(imageId);
			if(anchor != null){
				var imgSize = new frame_size_c(img.width, img.height);
				var panelSize = new frame_size_c(gfx.width, gfx.height);

				pos = this.adjust_position_for_anchor_in_panel(pos, anchor, imgSize, panelSize);
			}

			horizonPos = this.position_horizon_for_image_id(imageId, pos.y, this.ptHeight);
			useHorizon = assets.should_use_horizon_for_image_id(imageId);

			if(useHorizon && (horizonPos < 20 * config.coordinateScale || horizonPos > gfx.height - (20 * config.coordinateScale))) {
				// println(useHorizon, this.horizonPos, 20 * config.coordinateScale, config.coordinateScale);
				useHorizon = false;
				// println(useHorizon, this.horizonPos, 20 * config.coordinateScale, (gfx.height - (20 * config.coordinateScale, config.coordinateScale);
			}

			prevTopY = pos.y;
			prevBottomY = pos.y + img.height;

			var flipImage = false; //random(1) > 0.5;

			imageGfx.push();
			if(flipImage){
				imageGfx.scale(-1, 1);
				imageGfx.translate(-gfx.width, 0);
			}
			imageGfx.image(img, pos.x, pos.y);
			imageGfx.pop();

			outlineGfx.push();
			if(flipImage) {
				outlineGfx.scale(-1, 1);
				outlineGfx.translate(-gfx.width, 0);
			}
			outlineGfx.image(imgOutline, pos.x, pos.y);
			outlineGfx.pop();
		}

		var bgId = assets.get_random_background_id();
		useOutlines = (bgId == assets.black_bg_id);
		var bg = assets.get_background_image(bgId);

		var bgPosX = Math.floor(random(gfx.width - bg.width, 0));
		var bgPosY = Math.floor(random(gfx.height - bg.height, 0));

		gfx.push();
		gfx.image(bg, bgPosX, bgPosY);
		if(useOutlines) {
            gfx.image(outlineGfx, 0, 0);
        }
		if(useHorizon) {
			if (useOutlines) {
                gfx.image(assets.horizon_outline, 0, horizonPos);
            }
			gfx.image(assets.horizon_image, 0, horizonPos);
		}
		gfx.image(imageGfx, 0, 0);
		gfx.pop();
		return gfx;
	}

	this.recompose = function() {
		this.chooseGraphics();
		this.compositePanel(width, height);
	}

	this.choose_frame = function(w, h) {
		var variation = Math.floor(random(1, config.num_frame_variations));
		_frameImg = assets.frames[w-1][h-1][variation-1];
		_bgImg = assets.frames_bg[w-1][h-1][variation-1];
        //_bgImg = assets.frames[w-1][h-1][variation-1];
	}

	this.choose_graphics = function() {
		this.choose_frame(this.width, this.height);
		_contentGfx = this.choose_content();
	}

	this.composite_panel = function(w, h) {
		var fullImg = this.choose_content();
		var img = fullImg.get();

		img.mask(_bgImg);

		_compositeGfx = createGraphics(this.ptWidth, this.ptHeight);
		_compositeGfx.push();
		_compositeGfx.image(img, 0, 0, this.ptWidth, this.ptHeight);
		_compositeGfx.image(_frameImg, 0, 0);
        //_compositeGfx.image(_bgImg);
        //_compositeGfx.image(img);
		_compositeGfx.pop();
	}

    // After all functions have been defined, call the constructor
    this.init();
}