// Astro's BASE_URL is '/' for the custom domain; this also supports a future base path.
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
