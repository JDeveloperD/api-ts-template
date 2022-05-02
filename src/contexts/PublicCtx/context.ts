import { createContext } from 'react';
import { PublicThemeCtxInterface } from '../types';

const PublicThemeCtx = createContext<Partial<PublicThemeCtxInterface>>({});

export default PublicThemeCtx;
