import { NextPage } from 'next';
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';

import { AccountGuard } from '../components/AccountGuard';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <AccountGuard>
      <Component {...pageProps} />
    </AccountGuard>
  );
};
export default MyApp;
