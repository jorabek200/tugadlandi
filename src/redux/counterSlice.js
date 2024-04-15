const initialState = {
  count: 0,
  isShow: true,
};

function counterSlice(state = initialState, action) {
  if (action.type == "stop") {
    return {
      ...state,
      isShow: !state.isShow,
    };
  }
  if (action.type == "minus" && state.isShow == true) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type == "plus" && state.isShow == true) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type == "minus10" && state.isShow == true) {
    return {
      ...state,
      count: state.count - 10,
    };
  } else if (action.type == "plus10" && state.isShow == true) {
    return {
      ...state,
      count: state.count + 10,
    };
  } else if (action.type == "clear" && state.isShow == true) {
    return {
      ...state,
      count: (state.count = 0),
    };
  }

  return state;
}
export default counterSlice;
