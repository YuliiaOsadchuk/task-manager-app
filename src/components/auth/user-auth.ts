class UserAuth {
  setUserAuthenticated = (isAuthenticated: boolean): void => {
    sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  };

  isAuthenticated = (): boolean => {
    if (sessionStorage.getItem('isAuthenticated')) {
      return true;
    }
    return false;
  };

  clear = (): void => sessionStorage.removeItem('isAuthenticated');
}

export default UserAuth;
