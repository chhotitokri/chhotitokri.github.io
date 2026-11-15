import {paths} from './routes';

/** Map legacy GitHub Pages hash URLs to path-based routes. */
export function migrateLegacyHash(): void {
  const raw = window.location.hash.replace(/^#/, '');
  if (!raw) return;

  let target: string | null = null;

  if (raw.startsWith('product/')) {
    target = paths.product(raw.replace('product/', ''));
  } else if (raw === 'catalogue') {
    target = paths.products;
  } else if (raw === 'story') {
    target = paths.about;
  } else if (raw === 'provenance') {
    target = paths.sourcing;
  } else if (raw === 'journal') {
    target = paths.journal;
  } else if (raw === 'contact' || raw === 'trade' || raw === 'enquire') {
    target = paths.contact;
  } else if (raw === 'home') {
    target = paths.home;
  }

  if (target) {
    const search = window.location.search;
    window.history.replaceState(null, '', `${target}${search}`);
  }
}