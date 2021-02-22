import React, { useState, useEffect } from 'react';
import { Row, Col, TimePicker, Switch, Button, Form } from 'antd';
import  { PlusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import styles from './TimeEntry.less';

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
        <Form.Item style={{width: "100%"}}>
            <Form.List name={["operation", entry.day, hourType]}>
                {(fields, { add, remove }) => {
                    return (
                    <>
                        {fields.map((field, index) => (
                            index === 0
                            ? (<Row key={field.key} style={{margin:"0"}} justify="start" align="middle" gutter={{md: 16, sm:0}}>
                                <Col md={5} sm={12}>{entry.day}</Col>
                                <Col md={3} sm={10}>
                                    <Form.Item
                                        {...field} 
                                        name={[field.name, "isopen"]}
                                        fieldKey={[field.fieldKey, "isopen"]}
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Switch onChange={value => onOpenSwitchChange(value)}/>
                                    </Form.Item>
                                </Col>
                                <Col md={2} sm={2}>
                                    {isOpen ? "Open" : "Closed"}
                                </Col>
                                <Col md={11} sm={22}>
                                    <Form.Item
                                        {...field} 
                                        name={[field.name, "range"]} 
                                        fieldKey={[field.fieldKey, "range"]}
                                        hidden={!isOpen}
                                        noStyle
                                    >
                                        <RangePicker className={styles.rangePicker} minuteStep={15} format={format} allowClear={false} />
                                    </Form.Item>
                                </Col>
                                <Col md={2} sm={2}>
                                    <Button className={styles.addBtn} icon={<PlusCircleOutlined style={{color: "#D84349"}} />} onClick={()=>add()} hidden={!isOpen} />
                                </Col>
                            </Row>)
                            : (<Row style={{margin:"3% 0 3% 0"}} key={field.key} justify="start" align="middle" gutter={{md: 16, sm:0}}>
                                    <Col md={10} sm={0}></Col>
                                    <Col md={11} sm={22}>
                                        <Form.Item
                                            {...field} 
                                            name={[field.name, "range"]} 
                                            fieldKey={[field.fieldKey, "range"]}
                                            hidden={!isOpen}
                                            noStyle
                                        >
                                            <RangePicker className={styles.rangePicker} minuteStep={15} format={format} allowClear={false} />
                                        </Form.Item>
                                    </Col>
                                    <Col md={2} sm={2}>
                                        <Button className={styles.delBtn} icon={<DeleteOutlined style={{color: "#D84349"}} />} onClick={()=>remove(field.name)} hidden={!isOpen}/>
                                    </Col>
                            </Row>)
                        )
                        )}
                    </>
                    );}
                }
            </Form.List>
        </Form.Item>
    );
};

export default TimeEntry;