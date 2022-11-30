import classes from './Backdrop.module.css';

interface IBackdrop {
  onClickHendler: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop = ({ onClickHendler }: IBackdrop) => {
  return <div className={classes.backdrop} onClick={onClickHendler} />;
};

export default Backdrop;
