const initState = {
    usertype: "user"
}

const rootReducer = (state = initState, action) => {
    if (action.type === "SET_USERTYPE") {
        return {...state, usertype: action.usertype };
    }

};

export default rootReducer;