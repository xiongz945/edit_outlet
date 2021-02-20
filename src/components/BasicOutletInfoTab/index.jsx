import React from 'react';
import { Row, Col, Button, Form } from 'antd';
import { Link } from 'umi';
import BasicInfo from './BasicInfo';
import ConnectedPlatformsGroup from './ConnectedPlatformsGroup';
import ServiceOptions from './ServiceOptions';

const options = ['Dine-in', 'Delivery', 'Takeout'];

const onServiceOptionsChange = (changedFields, form) => {
    const { name, value } = changedFields[0];
    if (name && name.includes("service-options") && name.includes("others")) {
        if (value === options) {
            form.setFieldsValue({ 'service-options':{all: true}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{all: false}} );
        }
    } else if (name && name.includes("service-options") && name.includes("all")) {
        if (value === true) {
            form.setFieldsValue({ 'service-options':{others: options}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{others: []}} );
        }
    }
}

const BasicOutletInfoTab = () => {
    const [ form ] = Form.useForm();
    return (
        <Form form={form} layout="vertical" onFieldsChange={(changedFields,_) => onServiceOptionsChange(changedFields, form)}>
            <Row>
                <BasicInfo />
            </Row>
            <Row>
                <ConnectedPlatformsGroup />
            </Row>
            <Row>
                <ServiceOptions form={form} options={options}/>
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
    )
};

export default BasicOutletInfoTab;