// Dated changelog, newest first. Feeds /log.html and the "updated" stamp in the footer
// (the stamp always shows LOG[0].date). To add an entry, put it at the top.
// date is YYYY-MM-DD, or YYYY-MM when only the month matters. href is optional.

export const LOG = [
  { date: '2026-10-30', text: 'Added a blog, starting with “Taste is the one thing that isn’t in the dataset”.', href: './blog/taste-isnt-in-the-dataset.html' },
  { date: '2026-10-29', text: 'Added Generative art: all 46 of my fx(hash) projects from 2021–2023, each running live on its own page.', href: './generative-art.html' },
  { date: '2026-10-19', text: 'Added this log and a Belgrade clock in the footer.' },
  { date: '2026-10-10', text: 'Wisp is now my current role across the site. Rewrote the about bio and lined up the tables.', href: './about.html' },
  { date: '2026-10-10', text: 'Added a sitemap, robots.txt and structured data so search engines can find the site.' },
  { date: '2026-09-08', text: 'Added zineMaker.', href: './zinemaker.html' },
  { date: '2026-07-10', text: 'Added Autocutter.', href: './autocutter.html' },
  { date: '2026-06-17', text: 'Homepage grid, index view and slider now all read from one shared project list.' },
  { date: '2026-06-17', text: 'Redesign: blue links, dithered images that reveal their colors on hover, a compact footer and a static header.' },
  { date: '2026-06-12', text: 'Added Scanner Simulator.', href: './scanner-simulator.html' },
  { date: '2026-06-03', text: 'Added the Takeaways font for the big headings.' },
  { date: '2026-06-03', text: 'First commit: lomz.net with 26 projects.' },
  { date: '2026-03', text: 'Started as lead design / product at Wisp.', href: './about.html' },
];

export function formatLogDate(date) {
  const [year, month, day] = date.split('-');
  return day ? `${day}.${month}.${year}.` : `${month}.${year}.`;
}
