import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { FC } from 'react';
import Link from 'next/link';

import { Collectable } from '../../types';

import { Image } from '../Image';

interface CollectablesListProps {
  collectables: Collectable[];
}

const CollectablesList: FC<CollectablesListProps> = ({ collectables }) => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {collectables.map((collectable) => (
          <Col key={collectable.id} span={12}>
            <Link
              href={{
                pathname: '/[address]/[tokenId]',
                query: {
                  address: collectable.asset_contract.address,
                  tokenId: collectable.token_id,
                },
              }}
              passHref
            >
              <a>
                <Card
                  hoverable
                  style={{ cursor: 'pointer' }}
                  cover={
                    <Image alt={collectable.name} src={collectable.image_url} />
                  }
                >
                  {collectable.name}
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export { CollectablesList };
