import classes from './Button.module.css';

interface IButtonProps {
  type?: 'button' | 'submit';
  handlerOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const Button = ({
  type = 'button',
  handlerOnClick,
  children
}: IButtonProps) => {
  return (
    <button className={classes.button} type={type} onClick={handlerOnClick}>
      {children}
    </button>
  );
};

export default Button;
