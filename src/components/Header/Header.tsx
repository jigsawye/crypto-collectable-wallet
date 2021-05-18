import { FC } from 'react';
import { Col, PageHeader, Row } from 'antd';

interface HeaderProps {
  title?: string;
  onBack?: () => void;
}

const Header: FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <Row
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 5,
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px #f0f1f2',
        marginBottom: 16,
      }}
    >
      <Col lg={{ span: 12, offset: 6 }} md={{ span: 24 }}>
        <PageHeader title={title} onBack={onBack} />
      </Col>
    </Row>
  );
};

export { Header };
