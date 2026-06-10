// Site map building geometry — matched to the official DBV site plan.
// viewBox is 1200 x 1000.

window.SITE_MAP_BUILDINGS = [
  // ============================================================
  // TOP-LEFT VERTICAL PAIR (cabins 34, 35) — North-west corner
  // ============================================================
  { key: 'cabin-34', type: 'cabin', label: '34', fullLabel: 'Log Cabin 34', x: 70,  y: 195, w: 60, h: 50, shape: 'rect' },
  { key: 'cabin-35', type: 'cabin', label: '35', fullLabel: 'Log Cabin 35', x: 70,  y: 138, w: 60, h: 50, shape: 'rect' },

  // ============================================================
  // TOP ROW — Cabins 36-40, then 21-23  (under north parking strip)
  // ============================================================
  { key: 'cabin-36', type: 'cabin', label: '36', fullLabel: 'Log Cabin 36', x: 150, y: 120, w: 56, h: 70 },
  { key: 'cabin-37', type: 'cabin', label: '37', fullLabel: 'Log Cabin 37', x: 212, y: 120, w: 56, h: 70 },
  { key: 'cabin-38', type: 'cabin', label: '38', fullLabel: 'Log Cabin 38', x: 274, y: 120, w: 56, h: 70 },
  { key: 'cabin-39', type: 'cabin', label: '39', fullLabel: 'Log Cabin 39', x: 336, y: 120, w: 56, h: 70 },
  { key: 'cabin-40', type: 'cabin', label: '40', fullLabel: 'Log Cabin 40', x: 398, y: 120, w: 56, h: 70 },

  { key: 'cabin-21', type: 'cabin', label: '21', fullLabel: 'Log Cabin 21', x: 500, y: 120, w: 56, h: 70 },
  { key: 'cabin-22a', type: 'cabin', label: '22', fullLabel: 'Log Cabin 22', x: 562, y: 120, w: 56, h: 70 },
  { key: 'cabin-23', type: 'cabin', label: '23', fullLabel: 'Log Cabin 23', x: 624, y: 120, w: 56, h: 70 },

  // ============================================================
  // LONG MIDDLE ROW — Cabins 9 through 20 (east)
  // ============================================================
  { key: 'cabin-9',   type: 'cabin', label: '9',  fullLabel: 'Log Cabin 9',  x: 440, y: 275, w: 52, h: 68 },
  { key: 'cabin-10a', type: 'cabin', label: '10', fullLabel: 'Log Cabin 10', x: 496, y: 275, w: 52, h: 68 },
  { key: 'cabin-11b', type: 'cabin', label: '11', fullLabel: 'Log Cabin 11', x: 552, y: 275, w: 52, h: 68 },
  { key: 'cabin-12a', type: 'cabin', label: '12', fullLabel: 'Log Cabin 12', x: 608, y: 275, w: 52, h: 68 },
  { key: 'lodge-13a', type: 'cabin', label: '13', fullLabel: 'Log Cabin 13', x: 664, y: 275, w: 52, h: 68 },
  { key: 'cabin-14',  type: 'cabin', label: '14', fullLabel: 'Log Cabin 14', x: 720, y: 275, w: 52, h: 68 },
  { key: 'cabin-15',  type: 'cabin', label: '15', fullLabel: 'Log Cabin 15', x: 776, y: 275, w: 52, h: 68 },
  { key: 'cabin-16',  type: 'cabin', label: '16', fullLabel: 'Log Cabin 16', x: 832, y: 275, w: 52, h: 68 },
  { key: 'lodge-17d', type: 'cabin', label: '17', fullLabel: 'Log Cabin 17', x: 888, y: 275, w: 52, h: 68 },
  { key: 'lodge-18b', type: 'cabin', label: '18', fullLabel: 'Log Cabin 18', x: 944, y: 275, w: 52, h: 68 },
  { key: 'cabin-19',  type: 'meeting', label: '19', fullLabel: 'Meeting Room 19', x: 1000, y: 275, w: 52, h: 68 },
  { key: 'cabin-20',  type: 'reception', label: '20', fullLabel: 'Woodland Lodge · Reception', x: 1052, y: 275, w: 64, h: 68 },

  // ============================================================
  // LEFT VERTICAL — Cabins 24 through 33
  // ============================================================
  { key: 'cabin-31-33-a', sharedKey: 'cabin-31-33', type: 'cabin', label: '33', fullLabel: 'Log Cabin 33', x: 70, y: 268, w: 60, h: 52 },
  { key: 'cabin-31-33-b', sharedKey: 'cabin-31-33', type: 'cabin', label: '32', fullLabel: 'Log Cabin 32', x: 70, y: 324, w: 60, h: 52 },
  { key: 'cabin-31-33-c', sharedKey: 'cabin-31-33', type: 'cabin', label: '31', fullLabel: 'Log Cabin 31', x: 70, y: 380, w: 60, h: 52 },
  { key: 'cabin-30',   type: 'cabin', label: '30', fullLabel: 'Log Cabin 30', x: 70, y: 446, w: 60, h: 52 },
  { key: 'cabin-29-30-a', sharedKey: 'cabin-29-30', type: 'cabin', label: '29', fullLabel: 'Log Cabin 29', x: 70, y: 502, w: 60, h: 52 },
  { key: 'cabin-28',   type: 'cabin', label: '28', fullLabel: 'Log Cabin 28', x: 70, y: 558, w: 60, h: 52 },
  { key: 'cabin-24-27-d', sharedKey: 'cabin-24-27', type: 'cabin', label: '27', fullLabel: 'Log Cabin 27', x: 70, y: 624, w: 60, h: 52 },
  { key: 'cabin-24-27-c', sharedKey: 'cabin-24-27', type: 'cabin', label: '26', fullLabel: 'Log Cabin 26', x: 70, y: 680, w: 60, h: 52 },
  { key: 'cabin-24-27-b', sharedKey: 'cabin-24-27', type: 'cabin', label: '25', fullLabel: 'Log Cabin 25', x: 70, y: 736, w: 60, h: 52 },
  { key: 'cabin-24-27-a', sharedKey: 'cabin-24-27', type: 'cabin', label: '24', fullLabel: 'Log Cabin 24', x: 70, y: 792, w: 60, h: 52 },

  // ============================================================
  // CENTRAL VERTICAL — Cabins 1 through 8 (going north→south)
  // ============================================================
  { key: 'cabin-8',     type: 'cabin', label: '8', fullLabel: 'Log Cabin 8', x: 440, y: 395, w: 60, h: 52 },
  { key: 'cabin-7-mid', sharedKey: null, type: 'cabin', label: '7', fullLabel: 'Log Cabin 7', x: 440, y: 455, w: 60, h: 52 },
  { key: 'cabin-6-mid', sharedKey: null, type: 'cabin', label: '6', fullLabel: 'Log Cabin 6', x: 440, y: 515, w: 60, h: 52 },
  { key: 'cabin-5-mid', sharedKey: null, type: 'cabin', label: '5', fullLabel: 'Log Cabin 5', x: 440, y: 575, w: 60, h: 52 },
  { key: 'cabin-4c',    type: 'cabin', label: '4', fullLabel: 'Log Cabin 4', x: 440, y: 635, w: 60, h: 52 },
  { key: 'cabin-3',     type: 'cabin', label: '3', fullLabel: 'Log Cabin 3', x: 440, y: 695, w: 60, h: 52 },
  { key: 'cabin-2b',    type: 'cabin', label: '2', fullLabel: 'Log Cabin 2 · Merlin Moor', x: 440, y: 755, w: 60, h: 52 },
  { key: 'cabin-1-2a',  type: 'cabin', label: '1', fullLabel: 'Log Cabin 1 & 2A', x: 440, y: 815, w: 60, h: 52 },

  // ============================================================
  // BARNS — Right-side heritage complex
  // ============================================================
  { key: 'barn-7', type: 'barn', label: 'Barn 7', x: 600, y: 380, w: 200, h: 180, shape: 'L' },
  { key: 'barn-3', type: 'barn', label: 'Barn 3', x: 830, y: 480, w: 170, h: 130, shape: 'T' },
  { key: 'barn-8', type: 'barn', label: 'Barn 8', x: 770, y: 620, w: 130, h: 85 },
  { key: 'barn-2', type: 'barn', label: 'Barn 2', x: 800, y: 720, w: 140, h: 110 },
  { key: 'barn-4', type: 'barn', label: 'Barn 4', x: 580, y: 720, w: 200, h: 150 },
  { key: 'barn-5', type: 'barn', label: 'Barn 5', x: 720, y: 880, w: 80, h: 50 },
  { key: 'barn-1', type: 'barn', label: 'Barn 1', x: 950, y: 720, w: 130, h: 150 },
  { key: 'barn-16', type: 'barn', label: 'Barn 16', x: 730, y: 935, w: 80, h: 40 },

  // Courtyard restaurant — between Barn 4 and Barn 7
  { key: 'courtyard-restaurant', type: 'restaurant', label: 'Courtyard', fullLabel: 'The Courtyard Bar & Restaurant', x: 600, y: 575, w: 170, h: 60 },
];

// ============================================================
// Geographic features — roads, parking, paths, arrows
// ============================================================
window.SITE_MAP_GROUND = {
  // Big asphalt areas (main yard / car parks) — drawn as filled rectangles
  asphalt: [
    // North parking strip
    { x: 150, y: 70,  w: 700, h: 40 },
    // West / centre car park
    { x: 145, y: 215, w: 280, h: 645 },
    // Forecourt east of cabins 1-8
    { x: 505, y: 380, w: 95,  h: 500 },
    // Around the long middle row
    { x: 145, y: 215, w: 920, h: 50 },
    // Barn yard south
    { x: 580, y: 880, w: 360, h: 60 },
    // East of barns
    { x: 940, y: 720, w: 130, h: 80 },
    { x: 940, y: 800, w: 130, h: 80 },
    // North-east entrance
    { x: 845, y: 350, w: 220, h: 40 },
  ],

  // Parking line markings — each is x,y,w,h, draws striped row markings
  parkingLines: [
    { x: 150,  y: 80,  w: 700, h: 25, dir: 'h' },  // north parking row
    { x: 170,  y: 220, w: 250, h: 130, dir: 'v' }, // big central lot (north half)
    { x: 170,  y: 360, w: 250, h: 200, dir: 'v' },
    { x: 170,  y: 570, w: 250, h: 200, dir: 'v' },
    { x: 170,  y: 780, w: 250, h: 80,  dir: 'v' },
    { x: 600,  y: 885, w: 320, h: 30,  dir: 'h' }, // south barn parking
  ],

  // Roads with directional arrows. Each is a polyline with arrows along it.
  arrows: [
    // North top horizontal arrows (one-way clockwise)
    { x: 220, y: 90, dx: -1 },
    { x: 380, y: 90, dx: -1 },
    { x: 540, y: 90, dx: -1 },
    { x: 700, y: 90, dx: -1 },
    { x: 820, y: 90, dx: 1 },
    // Top middle road — leftward
    { x: 230, y: 240, dx: -1 },
    { x: 320, y: 240, dx: 1 },
    { x: 580, y: 240, dx: 1 },
    { x: 720, y: 240, dx: -1 },
    { x: 880, y: 240, dx: -1 },
    { x: 1000, y: 240, dx: -1 },
    // Central road — between cabins 8/1 and barns
    { x: 530, y: 470, dy: 1 },
    { x: 530, y: 600, dy: 1 },
    { x: 530, y: 720, dy: 1 },
    { x: 530, y: 840, dy: 1 },
    // West vertical (between cabin 24-33 column and central parking)
    { x: 140, y: 320, dy: 1 },
    { x: 140, y: 470, dy: 1 },
    { x: 140, y: 620, dy: 1 },
    { x: 140, y: 770, dy: -1 },
    // Central park vertical arrows
    { x: 290, y: 320, dy: 1 },
    { x: 290, y: 470, dy: -1 },
    { x: 290, y: 620, dy: 1 },
    { x: 290, y: 770, dy: 1 },
    // A449 (right edge)
    { x: 1145, y: 200, dy: -1 },
    { x: 1145, y: 400, dy: -1 },
    { x: 1145, y: 600, dy: 1 },
    { x: 1145, y: 800, dy: 1 },
  ],

  // No-entry signs
  noEntry: [
    { x: 1015, y: 165 },
    { x: 580,  y: 510 },
  ],

  // Reception marker
  reception: { x: 1112, y: 310 },

  // Fire assembly points (small green icons)
  fireAssembly: [
    { x: 420, y: 230 },
    { x: 100, y: 870 },
    { x: 575, y: 660 },
    { x: 765, y: 565 },
    { x: 870, y: 580 },
    { x: 690, y: 870 },
    { x: 870, y: 970 },
  ],

  // Trees/greenery (small dark green shapes)
  trees: [
    [200, 460], [200, 540], [200, 620], [200, 700], [200, 780],
    [380, 380], [380, 540], [380, 700], [380, 840],
    [1100, 950], [1100, 870], [40, 920], [40, 850],
    [510, 380], [510, 460], [510, 540], [510, 620], [510, 720], [510, 800], [510, 870],
  ],

  // Central green plot (between cabin columns)
  greenPlot: { x: 200, y: 360, w: 160, h: 380 },
};

// Mapping building → all businesses. For shared keys, multiple buildings share the same business list.
window.SITE_MAP_BUSINESSES_BY_KEY = (() => {
  const out = {};
  (window.BUSINESSES || []).forEach(b => {
    (out[b.buildingKey] = out[b.buildingKey] || []).push(b);
  });
  return out;
})();

// Map svg-building -> resolved key (some buildings share a sharedKey for highlighting)
window.SITE_MAP_RESOLVE_KEY = (svgKey) => {
  const b = window.SITE_MAP_BUILDINGS.find(b => b.key === svgKey);
  if (!b) return svgKey;
  return b.sharedKey || svgKey;
};
