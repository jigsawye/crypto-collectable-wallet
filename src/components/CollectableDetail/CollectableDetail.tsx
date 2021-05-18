import { Button, Col, Row } from 'antd';
import { FC } from 'react';

import { Collectable } from '../../types';
import { Image } from '../Image';

interface CollectableDetailProps {
  collectable: Collectable;
}

const CollectableDetail: FC<CollectableDetailProps> = ({ collectable }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Image src={collectable.image_url} alt={collectable.name} />
      <h2>{collectable.name}</h2>
      <p>{collectable.description}</p>

      <div
        style={{
          position: 'fixed',
          bottom: 8,
          left: 8,
          right: 8,
        }}
      >
        <Row>
          <Col flex="auto" lg={{ span: 12, offset: 6 }} md={{ span: 24 }}>
            <Button
              style={{ width: '100%' }}
              size="large"
              type="primary"
              href={collectable.permalink}
              target="_blank"
              rel="noreferrer"
            >
              Permalink
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { CollectableDetail };
