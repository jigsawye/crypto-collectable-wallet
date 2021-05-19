import { Modal, message } from 'antd';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

import { DEMO_ACCOUNT } from '../constants';

const useWeb3 = (): {
  account: string | null;
} => {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const initialAccount = async () => {
      // Use demo account if the user doesn't install Metamask
      if (!Web3.givenProvider) {
        setAccount(DEMO_ACCOUNT);
        return;
      }

      const web3 = new Web3(Web3.givenProvider);
      const currentAccounts = await web3.eth.getAccounts();

      // Use the current account if the user already select on Metamask before
      if (currentAccounts.length > 0) {
        setAccount(currentAccounts[0]);
        return;
      }

      Modal.confirm({
        title: 'Welcome to use Crypto Collectable Wallet!',
        content:
          'You need to select an account on MetaMask, or use demo account.',
        cancelText: 'Use demo account',
        onCancel: () => setAccount(DEMO_ACCOUNT),
        okText: 'Select now',
        onOk: async () => {
          try {
            const requestedAccounts = await web3.eth.requestAccounts();

            // Just support 1 account for now
            if (requestedAccounts.length > 1) {
              Modal.error({
                title: 'Please select only 1 account',
                onOk: () => window.location.reload(),
              });
            }

            setAccount(requestedAccounts[0]);
          } catch (err) {
            message.error(err.message);
          }
        },
      });
    };

    initialAccount();
  }, []);

  return {
    account,
  };
};

export { useWeb3 };
