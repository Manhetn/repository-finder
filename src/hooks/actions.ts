import { foundUserActions } from './../store/foundUser';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { gitHubActions } from '../store/github/github.slice';

const actions = {
  ...gitHubActions,
  ...foundUserActions,
};

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};

export default useActions;
