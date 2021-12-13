import { useState } from 'react';

import { IAuthContext } from '../interfaces';

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: any) {
    fakeAuth.isAuthenticated = true;
    cb();
  },
  signout(cb: any) {
    fakeAuth.isAuthenticated = false;
    cb();
  },
};

export const useProvideAuth = (): IAuthContext => {
  const [user, setUser] = useState<string | null>(null);

  const signin = (cb: any): void =>
    fakeAuth.signin(() => {
      setUser('user');
      cb();
    });

  const signout = (cb: any): void =>
    fakeAuth.signout(() => {
      setUser(null);
      cb();
    });

  return {
    user,
    signin,
    signout,
  };
};
