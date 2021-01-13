const initState = {
  usertype: "user",
  menu: "My Appointments",
};

const rootReducer = (state = initState, action) => {
  if (action.type === "SET_USERTYPE") {
    return { ...state, usertype: action.usertype };
  }

  if (action.type === "SET_MENU") {
    return { ...state, menu: action.menu };
  }

  return { ...state };
};

export default rootReducer;
