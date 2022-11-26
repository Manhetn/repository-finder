import { IInputData } from '../models/models';

export const getInputData = (
  e: React.ChangeEvent<HTMLInputElement>
): IInputData => {
  return { name: e.target.name, value: e.target.value };
};
