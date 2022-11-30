import { INavLink } from '../models/models';

const NAVIGATION_LINKS: Array<INavLink> = [
  {
    title: 'Home',
    href: '/',
    exact: true
  },
  {
    title: 'Search',
    href: '/search',
    exact: true
  },
  {
    title: 'Favorites',
    href: '/favorites',
    exact: true
  }
];

export default NAVIGATION_LINKS;
