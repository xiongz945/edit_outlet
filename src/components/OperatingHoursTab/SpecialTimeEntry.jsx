import React, { useState, useEffect } from 'react';
import { Row, Col, DatePicker, TimePicker, Switch, Button, Form } from 'antd';
import  { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const SpecialTimeEntry = (props) => {
    const { add, remove, field, form } = props;
    const [ isOpen, setIsOpen ] = useState(true);
    const { RangePicker } = TimePicker;
    const format = "hh:mm A";


    const onOpenSwitchChange = (value) => {
        setIsOpen(value);
    }

    useEffect(() => {
        const isOpenStored = form.getFieldValue([field.name, "isopen"]);
        console.log(field);
        setIsOpen((typeof isOpenStored) === "undefined" ? true : isOpenStored)
    }, []);

    return (
        <div>
            <Row>
                <Col>
                    <Form.Item 
                        name={[field.name, "date"]}
                        rules={[{
                            required: true,
                            message: "Please select a date"
                        }]}
                    >
                        <DatePicker />
                    </Form.Item>
                </Col>
                <Col>
                    <Form.Item
                        {...field} 
                        name={[field.name, "isopen"]}
                        fieldKey={[field.fieldKey, "isopen"]}
                        valuePropName="checked"
                        initialValue={true} 
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
                        rules={[{
                            required: isOpen,
                            message: "Please select the time"
                        }]}
                    >
                        <RangePicker minuteStep={15} format={format} use12Hours allowClear={false} />
                    </Form.Item>
                </Col>
                <Button icon={<PlusCircleOutlined />} onClick={()=>add()} hidden={!isOpen}></Button>
                <Button icon={<DeleteOutlined />} onClick={()=>remove(field.name)} hidden={!isOpen}></Button>
            </Row>

        </div>
    );
};

export default SpecialTimeEntry;