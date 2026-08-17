/*
 * ════════════════════════════════════════════════════
 *  Gallery Configuration — michaelwolfenberger.com
 * ════════════════════════════════════════════════════
 *  To add a photo:
 *  1. Drop the file into the matching folder inside photos/
 *  2. Add the filename to the array below
 *  3. Commit and push — it goes live automatically
 * ════════════════════════════════════════════════════
 */

const GALLERY_IMAGES = {
  portraits: [
    'photos/portraits/Juni_wall.jpg',
  ],
  urban: [
    // 'photos/urban/filename.jpg',
  ],
  pnw: [
    // 'photos/pnw/filename.jpg',
  ],
  light: [
    // 'photos/light/filename.jpg',
  ]
};

const GALLERY_META = {
  portraits: {
    title:       'Portraits & People',
    description: 'Candid, available-light portraits in natural environments.',
    page:        'portraits.html',
  },
  urban: {
    title:       'Urban Geometry',
    description: 'High-contrast street scenes, structural lines, and architectural shadows.',
    page:        'urban.html',
  },
  pnw: {
    title:       'Pacific Northwest',
    description: 'Coastal waterways, marine fog, and evergreen landscapes.',
    page:        'pnw.html',
  },
  light: {
    title:       'Available Light',
    description: 'Compositions exploring natural contrast, deep shadows, and low-light depth.',
    page:        'light.html',
  }
};
