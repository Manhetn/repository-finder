import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.content}>
        <span className={classes.copyright}>@IShestakov</span>
      </div>
    </footer>
  );
};

export default Footer;
