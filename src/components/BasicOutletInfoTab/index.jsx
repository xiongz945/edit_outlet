import React from 'react';
import { Row, Col, Button } from 'antd';
import BasicInfo from './BasicInfo';
import ConnectedPlatformsGroup from './ConnectedPlatformsGroup';
import ServiceOptions from './ServiceOptions';

const BasicOutletInfoTab = () => {
    return (
        <div>
            <Row>
                <BasicInfo />
            </Row>
            <Row>
                <ConnectedPlatformsGroup />
            </Row>
            <Row>
                <ServiceOptions />
            </Row>
            <Row>
                <Col>
                    <Button type="primary">Save</Button>
                </Col>
                <Col>
                    <Button type="default">Cancel</Button>
                </Col>
            </Row>
        </div>
    )
};

export default BasicOutletInfoTab;