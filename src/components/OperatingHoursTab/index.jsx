import React from 'react';
import { Row, Col, Button, Form } from "antd";
import { Link, connect } from 'umi';
import OperationHoursGroup from './OperationHoursGroup';
import SpecialHoursGroup from './SpecialHoursGroup';
import ConnectedPlatformsList from "./ConnectedPlatformsList";

const OperatingHoursTab = (props) => {
    const [ form ] = Form.useForm();
    const { outlet } = props;
    const onSave = (values) => {
        console.log('Success', values);
        const { dispatch } = props;
        dispatch({
            type: 'outlet/saveOperatingHours',
            payload: values
        });
    }

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onSave}
        >
            <Row>
                <OperationHoursGroup 
                    dineInEntries={outlet.operatingHoursForDineIn}
                    deliveryEntries={outlet.operatingHoursForDelivery} 
                />
            </Row>
            <Row>
                <SpecialHoursGroup />
            </Row>
            <Row>
                <ConnectedPlatformsList />
            </Row>
            <Row>
                <Col>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Save</Button>
                    </Form.Item>
                </Col>
                <Col>
                    <Link to='/'>
                        <Button type="default">Cancel</Button>
                    </Link>
                </Col>
            </Row>
        </Form>
    );
};

export default connect(({ outlet }) => ({
    outlet,
}))(OperatingHoursTab);