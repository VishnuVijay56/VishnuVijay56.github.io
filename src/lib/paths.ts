// Astro's BASE_URL is '/' for this GitHub user site; this also supports a future base path.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
