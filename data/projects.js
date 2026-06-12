// Single source of truth for project metadata.
// Consumed by the slider on the homepage and by <related-projects> on detail pages.
// To add a project: add a row here, drop the HTML card + index row on index.html
// (those are still hand-authored for now), and create the detail page.

export const PROJECTS = [
  { slug: 'block-states',                 name: 'Block States',                  category: 'game',       meta: 'Game · 2025',            cover: 'assets/block-states-01.jpg',                 tags: ['Godot', 'Blender', 'Game', '3D'] },
  { slug: 'scanner-simulator',            name: 'Scanner Simulator',             category: 'tool',       meta: 'Tool · 2026',            cover: 'assets/scanner-simulator-03.jpg',            tags: ['Web', 'Image', 'Interactive', 'Glitch', 'Open Source'] },
  { slug: 'crosswords',                   name: 'Crosswords',                    category: 'tool',       meta: 'Tool · 2026',            cover: 'assets/crosswords-01.jpg',                   tags: ['p5.js', 'Music', 'Interactive', 'Web'] },
  { slug: 'dithercam',                    name: 'DitherCam',                     category: 'tool',       meta: 'Tool · 2025',            cover: 'assets/ditherCam-01.jpg',                    tags: ['Web', 'Camera', 'Real-time', 'Dithering', 'Open Source'] },
  { slug: 'ditherapp',                    name: 'DitherApp',                     category: 'app',        meta: 'Dithering · 2023',       cover: 'assets/DitherApp-01.jpg',                    tags: ['Web', 'Image', 'Dithering', 'Open Source'] },
  { slug: 'simple-collection',            name: 'Simple Collection',             category: 'app',        meta: 'Apps · 2023',            cover: 'assets/simple-apps-01.jpg',                  tags: ['Web', 'AI-assisted', 'JavaScript', 'Mini-apps'] },
  { slug: 'analogvj',                     name: 'AnalogVJ',                      category: 'tool',       meta: 'Analog VJ · 2023',       cover: 'assets/AnalogVJ-01.jpg',                     tags: ['Hardware', 'Slide Projector', 'Performance', 'Music'] },
  { slug: 'codeart',                      name: 'CodeArt',                       category: 'generative', meta: 'Generative Art · 2023',  cover: 'assets/codeArt-01.jpg',                      tags: ['p5.js', 'Generative', 'Interactive', 'Print'] },
  { slug: 'kotrljko',                     name: 'Kotrljko',                      category: 'experiment', meta: 'Drawing Machine · 2023', cover: 'assets/kotrljko-03.jpg',                     tags: ['Arduino', 'NEMA17', 'Inkscape', 'GCode', 'Hardware'] },
  { slug: 'ash',                          name: 'Ash',                           category: 'brand',      meta: 'Brand · 2018',           cover: 'assets/ash-01.jpg',                          tags: ['Brand', 'Fashion', 'Clothing'] },
  { slug: 'opensnippet',                  name: 'openSnippet',                   category: 'tool',       meta: 'Tool · 2024',            cover: 'assets/openSnipper-01.jpg',                  tags: ['Full-stack', 'p5.js', 'Web', 'AI-assisted'] },
  { slug: 'tunetracker',                  name: 'tuneTracker',                   category: 'tool',       meta: 'Tool · 2024',            cover: 'assets/TuneTracker-01.jpg',                  tags: ['Web', 'Radio', 'Music', 'Open Source'] },
  { slug: 'pixelpaint',                   name: 'pixelPaint',                    category: 'tool',       meta: 'Tool · 2024',            cover: 'assets/pixelPaint-02.jpg',                   tags: ['Web', 'Pixel Art', 'Open Source'] },
  { slug: 'bytebeat-synthesizer',         name: 'Bytebeat Synthesizer',          category: 'tool',       meta: 'Tool · 2024',            cover: 'assets/BytebeatSynthesizer-01.jpg',          tags: ['Web', 'Audio', 'Math', 'Open Source'] },
  { slug: 'mirror',                       name: 'Mirror',                        category: 'tool',       meta: 'Tool · 2024',            cover: 'assets/mirror-01.jpg',                       tags: ['Web', 'p5.js', 'Camera', 'Interactive', 'Open Source'] },
  { slug: 'sequence-of-the-remains',      name: 'Sequence of the remains',       category: 'generative', meta: 'Installation · 2018',    cover: 'assets/Sequenceoftheremains-04.jpg',         tags: ['Generative', 'Music', 'Installation', 'p5.js', 'Pure Data'] },
  { slug: 'presscyclage',                 name: 'Presscyclage',                  category: 'experiment', meta: 'Installation · 2014',    cover: 'assets/Presscyclage-01.jpg',                 tags: ['Pure Data', 'Arduino', 'Webcam', 'Installation', 'Sound'] },
  { slug: 'kolorfon',                     name: 'Kolorfon',                      category: 'experiment', meta: 'Installation · 2015',    cover: 'assets/kolorfon-05.jpg',                     tags: ['Arduino', 'Pure Data', 'Ableton Live', 'MIDI', 'Installation'] },
  { slug: 'ardusajzer',                   name: 'Ardusajzer',                    category: 'experiment', meta: 'Synth · 2017',           cover: 'assets/ardusajzer-06.jpg',                   tags: ['Arduino', 'Synth', 'Hardware', 'Collaboration'] },
  { slug: 'kosmotomi-comic',              name: 'Kosmotomi comic',               category: 'experiment', meta: 'Comic · 2020',           cover: 'assets/kosmotomi-comic-08.jpg',              tags: ['Comic', 'Illustration'] },
  { slug: 'kosmotomi',                    name: 'Kosmotomi',                     category: 'experiment', meta: 'Series · 2021',          cover: 'assets/kosmotomi-06.jpg',                    tags: ['Photography', 'Series'] },
  { slug: 'generated-portraits',          name: 'Generated Portraits',           category: 'generative', meta: 'Generative Art · 2022',  cover: 'assets/Generated-Portraits-03.jpg',          tags: ['p5.js', 'Generative', 'Portrait'] },
  { slug: 'postcard-from-the-mountains',  name: 'Postcard From The Mountains',   category: 'generative', meta: 'Generative Art · 2022',  cover: 'assets/postcard-from-the-mountains-01.jpg',  tags: ['fx(hash)', 'Generative', 'NFT'] },
  { slug: 'postcard-from-italy',          name: 'Postcard from Italy',           category: 'generative', meta: 'Generative Art · 2022',  cover: 'assets/Postcard-from-Italy-02.jpg',          tags: ['fx(hash)', 'Generative', 'NFT'] },
  { slug: 'cryptographics',               name: 'Cryptographics',                category: 'experiment', meta: 'dApp · 2019',            cover: 'assets/Cryptographics-05.jpg',               tags: ['Ethereum', 'IPFS', 'dApp', 'NFT', 'Smart Contracts'] },
  { slug: 'super-unbelievable-fall-at-dawn', name: 'Super Unbelievable Fall at Dawn', category: 'generative', meta: 'Generative Art · 2022', cover: 'assets/Super-Unbelievable-Fall-at-Dawn-02.jpg', tags: ['p5.js', 'fx(hash)', 'Generative', 'NFT', 'Collaboration'] },
  { slug: 'brutal-postcards',             name: 'Brutal Postcards',              category: 'generative', meta: 'Generative Art · 2025',  cover: 'assets/Brutal-Postcards-09.jpg',             tags: ['fx(hash)', 'Generative', 'NFT', 'Open-form', 'Base', 'Brutalism'] },
];

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
