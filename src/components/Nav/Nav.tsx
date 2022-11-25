import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

interface INavLink {
  title: string;
  href: string;
  exact: boolean;
}

const navLinks: Array<INavLink> = [
  {
    title: 'Home',
    href: '/',
    exact: true
  },
  {
    title: 'Search',
    href: '/quizzes',
    exact: true
  },
  {
    title: 'Favorites',
    href: '/favorites',
    exact: true
  }
];

const Nav = () => {
  return (
    <nav className={classes.container}>
      <ul className={classes.list}>
        {navLinks.map((link, index) => {
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

export default Nav;
