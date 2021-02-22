import React from 'react';
import { Row, Col, Tag, Space } from 'antd';
import styles from './ConnectedPlatformsGroup.less';

const ConnectedPlatformsGroup = (props) => {
    const { platforms } = props;
    return (
        <Space direction="vertical">
            <Row style={{fontWeight: "500"}}>
                Connected Platforms
            </Row>
            <Row>
                {platforms.map((platform, index) => (
                    <Col key={index}>
                        <Tag className={styles.tag} color="default">{platform}</Tag>
                    </Col>
                ))}
            </Row>
        </Space>
    );
}

export default ConnectedPlatformsGroup;