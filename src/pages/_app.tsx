import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { useWeb3 } from '../hooks/useWeb3';
import { AccountContext } from '../context';

import 'antd/dist/antd.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { account } = useWeb3();

  // Render nothing when the user doesn't select any account
  if (!account) {
    return (
      <Head>
        <title>Crypto Collectable Wallet</title>
      </Head>
    );
  }

  return (
    <AccountContext.Provider value={account}>
      <Component {...pageProps} />
    </AccountContext.Provider>
  );
};
export default MyApp;
