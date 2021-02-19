import React from 'react';
import { ConfigProvider, Row, Col, TimePicker, Switch, Button } from 'antd';
import  { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';
import enUS from 'antd/lib/locale/en_US';

const TimeTable = (props) => {
    const { tabName } = props;
    const theOtherTab = tabName === "Dine-in" ? "delivery" : "dine-in";
    const format = "HH:mm";
    return (
        <ConfigProvider locale={enUS}>
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
        </ConfigProvider>
    );
};

export default TimeTable;