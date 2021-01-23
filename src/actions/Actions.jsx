import axios from "axios";

export const headers = {
  "Content-Type": "application/json",
};

const devpiesAPI = "http://localhost:9090";

export const setMenu = (menu) => {
  return { type: "SET_MENU", menu: menu };
};

export const doSignIn = (email, password) => {
  let url = `${devpiesAPI}/auth/login?username=${email}&password=${password}`;
  return axios.post(url, {}, { headers: headers });
};

export const signIn = (authUser) => {
  console.log(authUser);

  return {
    type: "USER_SIGN_IN",
    authUser: authUser,
    user: authUser,
  };
};

export const getCurrentUser = (authUser) => {
  console.log(authUser);
  localStorage.setItem("authUser", JSON.stringify(authUser));
  let url = `${devpiesAPI}/current`;
  headers["Authorization"] = `Bearer ${authUser.user.token}`;
  return axios.get(url, {
    headers: headers,
    crossdomain: true,
    "Access-Control-Allow-Origin": "*",
  });
};
