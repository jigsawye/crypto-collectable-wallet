import { FC } from 'react';

import { useWeb3 } from '../../hooks/useWeb3';
import { AccountContext } from '../../context';

const AccountGuard: FC = ({ children }) => {
  const { account } = useWeb3();

  // Render nothing when the user doesn't select any account
  if (!account) {
    return null;
  }

  return (
    <AccountContext.Provider value={account}>
      {children}
    </AccountContext.Provider>
  );
};

export { AccountGuard };
