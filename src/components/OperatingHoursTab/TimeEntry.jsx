import React from 'react';
import { Row, Col, TimePicker, Switch, Button } from 'antd';
import  { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const TimeEntry = (props) => {
    const format = "HH:mm A";
    const { entry } = props;
    return (
        <div>
            {entry.hours.map((hour, index) => {
                return (
                    index === 0
                    ? (
                        <>
                        <Row>
                            <Col>From:</Col>
                            <Col>To:</Col>
                        </Row>
                        <Row>
                            <Col>{entry.day}</Col>
                            <Col><Switch />Open</Col>
                            <Col><TimePicker minuteStep={15} format={format} use12Hours /></Col>
                            <Col>-<TimePicker minuteStep={15} format={format} use12Hours /></Col>
                            <Button icon={<PlusCircleOutlined />}></Button>
                        </Row>
                        </>
                    )
                    : (
                        <>
                        <Row>
                            <Col>From:</Col>
                            <Col>To:</Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col><TimePicker minuteStep={15} format={format} use12Hours /></Col>
                            <Col>-<TimePicker minuteStep={15} format={format} use12Hours /></Col>
                            <Button icon={<DeleteOutlined />}></Button>
                        </Row>
                        </>
                    )
            )})}
            {/* <Row>
                <Col>From:</Col>
                <Col>To:</Col>
            </Row>
            <Row>
                <Col>{entry.day}</Col>
                <Col><Switch />Open</Col>
                <Col><TimePicker minuteStep={15} format={format} use12Hours /></Col>
                <Col>-<TimePicker minuteStep={15} format={format} use12Hours /></Col>
                <Button icon={<PlusCircleOutlined />}></Button>
            </Row> */}
        </div>
    );
};

export default TimeEntry;