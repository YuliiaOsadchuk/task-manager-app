export const getUserAuthenticated = (): string | null => sessionStorage.getItem('isAuthenticated');

export const setUserAuthenticated = (isAuthenticated: boolean): void => {
  sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
};
