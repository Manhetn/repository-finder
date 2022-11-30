import { ReactNode } from 'react';
import classes from './Container.module.css';

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div className={classes.box}>{children}</div>;
};

export default Container;
