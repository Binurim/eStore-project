const initialState = [];
//const initialState = {};

export const topMenu = (state = initialState, action) => {

  return action.data || state
  // return {
  //   ...state,
  //   ...action.data,
  // };
};
