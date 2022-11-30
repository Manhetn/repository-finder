import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <h2 className={classes.logo}>Logo</h2>
      </div>
    </header>
  );
};

export default Header;
