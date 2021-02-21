import React, {useState} from 'react';
import { Row, Col, Checkbox, Divider, Form } from 'antd';


const ServiceOptions = ({form, options}) => {

    return (
        <>
            <Row>Service Options</Row>
            <Divider />
            <Form.Item>
            <Row>
                <Col>
                    <Form.Item name={["service-options", "all"]} valuePropName="checked" noStyle>
                        <Checkbox>All</Checkbox>
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name={["service-options", "options"]} rules={[{required: true, message: "Please select service options"}]} noStyle>
                        <Checkbox.Group options={options} />
                    </Form.Item>
                </Col>
            </Row>
            </Form.Item>

        </>
    )
};

export default ServiceOptions;