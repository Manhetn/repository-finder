import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

interface INavLink {
  title: string;
  href: string;
  exact: boolean;
}

const LINKS: Array<INavLink> = [
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

const Navigation = () => {
  return (
    <nav className={classes.container}>
      <ul className={classes.list}>
        {LINKS.map((link, index) => {
          return (
            <li className={classes.item} key={link.title + '-' + index}>
              <NavLink
                className={classes.link}
                activeClassName={classes['link-active']}
                to={link.href}
                exact={link.exact}
              >
                {link.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
