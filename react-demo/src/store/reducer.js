import * as actionType from "./constants";
const initState = {
  userInfo: {
    name: "",
  },
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_USERINFO:
      return { ...state, userInfo: { ...state.userInfo, ...action.userInfo } };

    default:
      return state;
  }
};
export default reducer;
