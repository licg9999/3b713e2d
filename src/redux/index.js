export const SET_TITLE = 'SET_TITLE';

export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}

export const initialState = {
  title: 'Hi, states.',
};

export function reducer(state = initialState, action) {
  const {type, title} = action;
  switch (type) {
    case SET_TITLE:
      return {...state, title};
    default:
      break;
  }
  return state;
}

export {createStore} from 'redux';
export {Provider as ReduxProvider} from 'react-redux';
