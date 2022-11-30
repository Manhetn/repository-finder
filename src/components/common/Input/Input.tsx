import { getInputData } from '../../../helpers/getInputData';
import { IInputData } from '../../../models/models';
import classes from './Input.module.css';

interface IInputProps {
  label?: string;
  type?: string;
  name: string;
  id?: string;
  value: string;
  onChange: (data: IInputData) => void;
  error?: string;
  placeholder?: string;
}

const Input = ({
  label,
  type = 'text',
  name,
  id,
  value,
  onChange,
  error,
  placeholder
}: IInputProps) => {
  const currentId: string = id || `input-${name}-${type}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(getInputData(e));
  };

  return (
    <div className={classes.field}>
      {label && (
        <label className={classes.label} htmlFor={currentId}>
          {label}
        </label>
      )}
      <input
        className={`${classes.input}${
          error ? ' ' + classes['input-error'] : ''
        }`}
        type={type}
        id={currentId}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <span className={classes.error}>{error}</span>}
    </div>
  );
};

export default Input;
