import { UserCtxInterface } from '@contexts/types';
import { createContext } from 'react';

const UserCtx = createContext<Partial<UserCtxInterface>>({});

export default UserCtx;
