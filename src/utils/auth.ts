export const getRefreshToken = () => {
  const token = localStorage.getItem("refresh_token") || "";

  return token;
};

export const getAccessToken = () => {
  const token = localStorage.getItem("access_token") || "";

  return token;
};

export const setTokens = ({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) => {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
};

export const deleteTokens = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};
