import React from 'react';
import { Row, Col, Tag } from 'antd';

const ConnectedPlatformsGroup = () => {
    return (
        <div>
            <Row>
                Connected Platforms
            </Row>
            <Row>
                <Col>
                    <Tag color="default">Foodpanda</Tag>
                </Col>
                <Col>
                    <Tag color="default">Google</Tag>
                </Col>
                <Col>
                    <Tag color="default">Facebook</Tag>
                </Col>
            </Row>
        </div>
    );
}

export default ConnectedPlatformsGroup;