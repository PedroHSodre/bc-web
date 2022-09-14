export const isAuthenticated = () => {
  if (
    localStorage.getItem("access_token") &&
    localStorage.getItem("access_token") != "null"
  ) {
    return true;
  }

  return false;
};

export const loginService = (acessToken) => {
  localStorage.setItem("access_token", acessToken);
};

export const logout = () => {
  localStorage.setItem("access_token", JSON.stringify(null));
  window.location.pathname = "/";
};

export const getToken = () => {
  return localStorage.getItem("access_token");
};
