import { createContext } from 'react';

import { DEMO_ACCOUNT } from '../constants';

const AccountContext = createContext<string>(DEMO_ACCOUNT);

export { AccountContext };
