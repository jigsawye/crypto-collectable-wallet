import { Card, Col, Row } from 'antd';
import { FC } from 'react';
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
            <Card
              hoverable
              style={{ cursor: 'pointer' }}
              cover={
                <Image alt={collectable.name} src={collectable.image_url} />
              }
            >
              {collectable.name}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export { CollectablesList };
