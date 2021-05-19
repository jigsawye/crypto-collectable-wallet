import { useContext } from 'react';

import { AccountContext } from '../context';

const useAccountContext = (): string => useContext(AccountContext);

export { useAccountContext };
