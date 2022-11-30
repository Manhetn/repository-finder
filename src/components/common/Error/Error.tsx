import classes from './Error.module.css';

interface IErrorProrps {
  title?: string;
  text?: string;
}

const Error = ({
  title = 'Error!',
  text = 'Something went wrong :('
}: IErrorProrps) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      <p className={classes.text}>{text}</p>
    </div>
  );
};

export default Error;
