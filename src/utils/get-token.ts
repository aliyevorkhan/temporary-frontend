// import Cookies from 'js-cookie';

export const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }

  return localStorage.getItem("access_token");
};
