import React from 'react';
import { Row, Col, Button, Form } from 'antd';
import { Link, connect } from 'umi';
import BasicInfo from './BasicInfo';
import ConnectedPlatformsGroup from './ConnectedPlatformsGroup';
import ServiceOptions from './ServiceOptions';
import { options } from '../../utils/constants';
// const options = ['Dine-in', 'Delivery', 'Takeout'];

const onServiceOptionsChange = (changedFields, form) => {
    const { name, value } = changedFields[0];
    if (name && name.includes("service-options") && name.includes("options")) {
        if (value.length === options.length) {
            form.setFieldsValue({ 'service-options':{all: true}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{all: false}} );
        }
    } else if (name && name.includes("service-options") && name.includes("all")) {
        if (value === true) {
            form.setFieldsValue({ 'service-options':{options: options}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{options: []}} );
        }
    }
}


const BasicOutletInfoTab = (props) => {
    const [ form ] = Form.useForm();
    const { outlet } = props;

    const onSave = (values) => {
        console.log('Success', values);
        const { dispatch } = props;
        dispatch({
            type: 'outlet/saveOutlet',
            payload: values
        });
    }
    return (
        <Form 
            form={form} 
            layout="vertical"
            initialValues={{
                "brand-name": outlet.brandName,
                "outlet-name": outlet.outletName,
                "phone-number": outlet.phoneNumber,
                "address": outlet.address,
                "service-options": {
                    "all": outlet.serviceOptions.all,
                    "options": outlet.serviceOptions.options
                }
            }} 
            onFieldsChange={
                (changedFields,_) => onServiceOptionsChange(changedFields, form)
            }
            onFinish={onSave}
        >
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

export default connect(({ outlet }) => ({
    outlet,
}))(BasicOutletInfoTab);