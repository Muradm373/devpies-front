import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

// export const const devpiesAPI = "https://devpies-back.herokuapp.com";
export const devpiesAPI = "http://localhost:9090";

export const setMenu = (menu) => {
  console.log(menu)
  return { type: "SET_MENU", menu: menu };
};

export const doSignIn = (email, password) => {
  let url = `${devpiesAPI}/auth/login?username=${email}&password=${password}`;
  return axios.post(url, {}, { headers: headers });
};

export const signIn = (authUser) => {
  return {
    type: "USER_SIGN_IN",
    authUser: authUser,
    user: authUser,
  };
};

export const signOut = () => {
  return {
    type: "USER_SIGN_OUT",
  };
};


export const getCurrentUser = (authUser) => {
  console.log(authUser);
  localStorage.setItem("authUser", JSON.stringify(authUser.user.token));
  let url = `${devpiesAPI}/current`;
  headers["Authorization"] = `Bearer ${authUser.user.token}`;
  return axios.get(url, {
    headers: headers,
    crossdomain: true,
    "Access-Control-Allow-Origin": "*",
  });
};

export const doCreateUserWithEmailAndPassword = (
  name,
  surname,
  password,
  email,
  contact,
  address
) => {
  let url = `${devpiesAPI}/auth/register?username=${email}&password=${password}`;
  return axios.post(
    url,
    {
      // name,
      // surname,
      // password,
      // email,
      // contact,
      // address,
    },
    { headers: headers }
  );
};

export const setBodyParts = (bodyParts) => {
  return {
    type: "SET_BODY_PARTS",
    bodyParts: bodyParts,
  };
};