import React from 'react';
import { Row, Col, TimePicker, Switch, Button } from 'antd';
import  { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const TimeTable = (props) => {
    const { tabName } = props;
    const theOtherTab = tabName === "Dine-in" ? "delivery" : "dine-in";
    const format = "HH:mm";
    return (
        <div>
            <Row>
                <Col>Copy hours data from the {theOtherTab}</Col>
                <Switch />
            </Row>
            <Row>
                <Col>Monday</Col>
                <Col><Switch />Open</Col>
                <Col><TimePicker minuteStep={15} format={format} /></Col>
                <Col>-<TimePicker minuteStep={15} format={format} /></Col>
                <Button icon={<PlusCircleOutlined />}></Button>
            </Row>
            <Row>
                <Col>Tuesday</Col>
                <Col><Switch />Open</Col>
                <Col><TimePicker minuteStep={15} format={format} /></Col>
                <Col>-<TimePicker minuteStep={15} format={format} /></Col>
                <Button icon={<PlusCircleOutlined />}></Button>
            </Row>
            <Row>
                Show more <DownOutlined />
            </Row>
        </div>
    );
};

export default TimeTable;