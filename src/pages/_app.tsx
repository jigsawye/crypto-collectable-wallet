import { NextPage } from 'next';
import { AppProps } from 'next/app';

import 'antd/dist/antd.css';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
