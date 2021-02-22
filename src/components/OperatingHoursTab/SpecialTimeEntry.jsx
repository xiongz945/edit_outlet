import React, { useState, useEffect } from 'react';
import { Row, Col, DatePicker, TimePicker, Switch, Button, Form } from 'antd';
import  { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styles from './SpecialTimeEntry.less';

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
            <Row style={{margin:"0"}} justify="start" align="middle" gutter={{md: 8, sm:0}}>
                <Col md={5} sm={12}>
                    <Form.Item 
                        name={[field.name, "date"]}
                        rules={[{
                            required: true,
                            message: "Please select a date"
                        }]}
                        noStyle
                    >
                        <DatePicker className={styles.datePicker} />
                    </Form.Item>
                </Col>
                <Col md={3} sm={10}>
                    <Form.Item
                        {...field} 
                        name={[field.name, "isopen"]}
                        fieldKey={[field.fieldKey, "isopen"]}
                        valuePropName="checked"
                        initialValue={true}
                        noStyle 
                    >
                        <Switch onChange={value => onOpenSwitchChange(value)}/>
                    </Form.Item>
                </Col>
                <Col md={2} sm={2}>
                    {isOpen ? "Open" : "Closed"}
                </Col>
                <Col md={9} sm={20}>
                    <Form.Item
                        {...field} 
                        name={[field.name, "range"]} 
                        fieldKey={[field.fieldKey, "range"]}
                        hidden={!isOpen}
                        rules={[{
                            required: isOpen,
                            message: "Please select the time"
                        }]}
                        noStyle
                    >
                        <RangePicker className={styles.rangePicker} minuteStep={15} format={format} use12Hours allowClear={false} />
                    </Form.Item>
                </Col>
                    <Button className={styles.addBtn} icon={<PlusCircleOutlined style={{color: "#D84349"}} />} onClick={()=>add()} ></Button>
                    <Button className={styles.delBtn} icon={<DeleteOutlined style={{color: "#D84349"}} />} onClick={()=>remove(field.name)} ></Button>
            </Row>
    );
};

export default SpecialTimeEntry;