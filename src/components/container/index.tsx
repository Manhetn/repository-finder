import { ReactNode } from 'react';
import './index.css';

interface IContainerProps {
  children: ReactNode;
}

const Container = ({ children }: IContainerProps) => {
  return <div className="container__main">{children}</div>;
};

export default Container;
