import { personal } from './personal';

/** Edit these links when your public profiles change. */
export const externalLinks = [
  { label: 'GitHub', href: 'https://github.com/VishnuVijay56', available: true },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=W8rbJPwAAAAJ&hl=en', available: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishnuvijay56/', available: true },
  { label: 'Email', href: `mailto:${personal.email}`, available: !personal.email.includes('EXAMPLE.COM') },
];
