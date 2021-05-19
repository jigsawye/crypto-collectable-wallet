import { Col, Empty, Row, Spin } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import { useInView } from 'react-intersection-observer';

import { useEffect } from 'react';
import { Header } from '../components/Header';
import { CollectablesList } from '../components/CollectablesList';

import { useCollectables } from '../hooks';

const Home: NextPage = () => {
  const { collectables, loading, empty, reachingEnd, loadMore } =
    useCollectables();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !loading && !reachingEnd) {
      loadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, loading]);

  return (
    <>
      <Head>
        <title>List | Crypto Collectable Wallet</title>
      </Head>
      <Header title="List" />
      <Row style={{ paddingBottom: 64 }}>
        <Col
          lg={{ span: 12, offset: 6 }}
          md={{ span: 24 }}
          style={{ width: '100%', padding: '0 12px' }}
        >
          {empty && <Empty />}
          {collectables.length > 0 && (
            <>
              <CollectablesList collectables={collectables} />
              <div ref={ref} />
            </>
          )}
          <Row justify="center" style={{ marginTop: 32 }}>
            {!empty && reachingEnd && <h3>no more collectables</h3>}
            {loading && <Spin />}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Home;
