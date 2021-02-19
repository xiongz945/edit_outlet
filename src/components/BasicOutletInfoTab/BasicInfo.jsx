import React from 'react';
import { Input, Row, Col } from 'antd';


const BasicInfoForm = () => {
    return (
        <div>
            <Row>
                <Col>
                    <label htmlFor="brand-name">Brand Name</label>
                    <Input id="brand-name" placeholder="Brand Name" />
                </Col>
                <Col>
                    <label htmlFor="outlet-name">Outlet Name</label>
                    <Input id="outlet-name" placeholder="Outlet Name"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label htmlFor="address">Address</label>
                    <Input id="address" placeholder="Address" />
                </Col>
                <Col>
                    <label htmlFor="phone-number">Phone Number</label>
                    <Input id="phone-number" placeholder="Phone Number"/>
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