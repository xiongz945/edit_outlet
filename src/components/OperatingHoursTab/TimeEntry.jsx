import React, { useState, useEffect } from 'react';
import { Row, Col, TimePicker, Switch, Button, Form } from 'antd';
import  { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const TimeEntry = (props) => {
    const format = "hh:mm A";
    const { entry, hourType, form } = props;
    const { RangePicker } = TimePicker;
    const [isOpen, setIsOpen] = useState(entry.isOpen);
    useEffect(() => {
        const records = [];
        if (entry.hours.length > 0) {
            for (const hour of entry.hours) {
                const start = moment(hour[0], 'hh:mm A');
                const end = moment(hour[1], 'HH:mm A');
                if (records.length === 0) {
                    records.push({isopen: entry.isOpen, range: [start, end]});
                } else {
                    records.push({range: [start, end]});
                }
            }
        } else {
            records.push({isopen: entry.isOpen, range:[]});
        }
        
        form.setFieldsValue({"operation": {[entry.day]: {[hourType]: records}}});
    }, [])

    const onOpenSwitchChange = (value) => {
        setIsOpen(value);
    }

    return (
        <Form.Item>
            <Form.List name={["operation", entry.day, hourType]}>
                {(fields, { add, remove }) => {
                    return (
                    <>
                        {fields.map((field, index) => (
                            index === 0
                            ? (<Row key={field.key}>
                                <Col>{entry.day}</Col>
                                <Col>
                                    <Form.Item
                                        {...field} 
                                        name={[field.name, "isopen"]}
                                        fieldKey={[field.fieldKey, "isopen"]}
                                        valuePropName="checked" 
                                    >
                                        <Switch onChange={value => onOpenSwitchChange(value)}/>
                                    </Form.Item>
                                    </Col>
                                    <Col>
                                    {isOpen ? "Open" : "Closed"}
                                </Col>
                                <Col>
                                    <Form.Item
                                        {...field} 
                                        name={[field.name, "range"]} 
                                        fieldKey={[field.fieldKey, "range"]}
                                        hidden={!isOpen}
                                    >
                                        <RangePicker minuteStep={15} format={format} allowClear={false} />
                                    </Form.Item>
                                </Col>
                                
                                <Button icon={<PlusCircleOutlined />} onClick={()=>add()} hidden={!isOpen} />
                            </Row>)
                            : (<Row key={field.key}>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col>
                                        <Form.Item
                                            {...field} 
                                            name={[field.name, "range"]} 
                                            fieldKey={[field.fieldKey, "range"]}
                                            hidden={!isOpen}
                                        >
                                            <RangePicker minuteStep={15} format={format} allowClear={false} />
                                        </Form.Item>
                                    </Col>
                                    {/* <Col>--</Col>
                                    <Col>
                                        <Form.Item
                                            {...field} 
                                            name={[field.name, "to"]} 
                                            fieldKey={[field.fieldKey, "to"]}
                                            preserve
                                        >
                                            <TimePicker minuteStep={15} format={format} use12Hours />
                                        </Form.Item>
                                    </Col> */}
                                    <Button icon={<DeleteOutlined />} onClick={()=>remove(field.name)} hidden={!isOpen}/>
                            </Row>)
                        )
                        )}
                    </>
                    );}
                }
            </Form.List>
        </Form.Item >
    );
};

export default TimeEntry;