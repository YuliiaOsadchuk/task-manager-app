export interface User {
  id: string;
  username: string;
  password: string;
}

export interface IAuthContext {
  user: string | null;
  signin: (cb: any) => void;
  signout: (cb: any) => void;
}
