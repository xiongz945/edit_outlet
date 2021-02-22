import React from 'react';
import { Input, Row, Col, Form } from 'antd';
import styles from './BasicInfo.less';

const BasicInfoForm = () => {
    return (
        <div style={{width: "100%"}}>
            <Row>
                <Col md={12} sm={24}>
                    <Form.Item name="brand-name" label="Brand Name" rules={[{required: true}]}>
                        <Input className={styles.brandName} id="brand-name" placeholder="Brand Name" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item name="outlet-name" label="Outlet Name" rules={[{required: true}]}>
                        <Input className={styles.outletName} placeholder="Outlet Name"/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={24}>
                    <Form.Item name="address" label="Address" rules={[{required: true}]}>
                        <Input className={styles.address} placeholder="Address" />
                    </Form.Item>
                </Col>
                <Col md={12} sm={24}>
                    <Form.Item name="phone-number" label="Phone Number" rules={[{required: true}]}>
                        <Input className={styles.phoneNumber} placeholder="Phone Number" type="tel" />
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