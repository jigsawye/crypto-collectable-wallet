import { Col, Row, Spin } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { CollectableDetail } from '../../components/CollectableDetail';
import { Header } from '../../components/Header';
import { useCollectable } from '../../hooks';

const Detail: NextPage = () => {
  const {
    push,
    query: { address, tokenId },
  } = useRouter();
  const { collectable, error, loading } = useCollectable({
    address: address as string | undefined,
    tokenId: tokenId as string | undefined,
  });

  return (
    <>
      <Head>
        <title>{collectable?.name} | Crypto Collectable Wallet</title>
      </Head>
      <Header title={collectable?.name} onBack={() => push('/')} />
      <Row>
        <Col flex="auto" lg={{ span: 12, offset: 6 }} md={{ span: 24 }}>
          <Row justify="center">
            {error && <h2>{error.message}</h2>}
            {!error && loading && <Spin />}
          </Row>
          {collectable && <CollectableDetail collectable={collectable} />}
        </Col>
      </Row>
    </>
  );
};

export default Detail;
