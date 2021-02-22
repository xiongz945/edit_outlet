import React from 'react';
import { Row, Col, Tag, Space } from 'antd';
import styles from './ConnectedPlatformsGroup.less';

const ConnectedPlatformsGroup = () => {
    return (
        <Space direction="vertical">
            <Row style={{fontWeight: "500"}}>
                Connected Platforms
            </Row>
            <Row>
                <Col>
                    <Tag className={styles.tag} color="default">Foodpanda</Tag>
                </Col>
                <Col>
                    <Tag className={styles.tag} color="default">Google</Tag>
                </Col>
                <Col>
                    <Tag className={styles.tag} color="default">Facebook</Tag>
                </Col>
            </Row>
        </Space>
    );
}

export default ConnectedPlatformsGroup;