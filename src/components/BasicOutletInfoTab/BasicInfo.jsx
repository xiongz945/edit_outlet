import React from 'react';
import { Input, Row, Col, Form } from 'antd';


const BasicInfoForm = () => {
    return (
        <div>
            <Row>
                <Col>
                    <Form.Item name="brand-name" label="Brand Name" rules={[{required: true}]}>
                        <Input id="brand-name" placeholder="Brand Name" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name="outlet-name" label="Outlet Name" rules={[{required: true}]}>
                        <Input placeholder="Outlet Name"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Item name="address" label="Address" rules={[{required: true}]}>
                        <Input placeholder="Address" />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item name="phone-number" label="Phone Number" rules={[{required: true}]}>
                        <Input placeholder="Phone Number" type="tel"/>
                    </Form.Item>
                </Col>
            </Row>
        </div>
    )
};

const BasicInfo = () => {
    return (
        <BasicInfoForm />
    );
}

export default BasicInfo;