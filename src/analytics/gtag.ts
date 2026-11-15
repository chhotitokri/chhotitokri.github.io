declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

let loaded = false;

export function initAnalytics(): void {
  if (loaded || !MEASUREMENT_ID || typeof window === 'undefined') return;
  loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {anonymize_ip: true});
}

export function trackEvent(name: string, params?: Record<string, string>): void {
  if (!MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', name, params);
}

export function trackMarketplaceClick(marketplace: string, productId?: string): void {
  trackEvent('marketplace_click', {
    marketplace,
    ...(productId ? {item_id: productId} : {}),
  });
}