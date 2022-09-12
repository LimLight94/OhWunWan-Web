const TOKEN_KEY = 'jwt';

export const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
}