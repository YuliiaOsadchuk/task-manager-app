import { createContext } from 'react';

import { IAuthContext } from '../interfaces';

export const authContext = createContext<IAuthContext | null>(null);
