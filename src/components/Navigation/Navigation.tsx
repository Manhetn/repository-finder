import { NavLink } from 'react-router-dom';
import NAVIGATION_LINKS from '../../constants/navigation-links';
import classes from './Navigation.module.css';

const Navigation = () => {
  const links = NAVIGATION_LINKS;

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          {links.map((link, index) => {
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
    </div>
  );
};

export default Navigation;
