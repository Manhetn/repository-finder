import classes from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.text}>Loading</h2>
      <div className={classes.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
