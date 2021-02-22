import React, { useEffect } from 'react';
import { Row, Col, Tabs, Divider, Form, Switch, Button } from 'antd';
import SpecialTimeEntry from './SpecialTimeEntry';
import { PlusCircleOutlined } from '@ant-design/icons';
import moment from 'moment';
import { isEmpty } from 'lodash';


const { TabPane } = Tabs;

const SpecialHoursGroup = (props) => {
  const { form, dineInEntries, deliveryEntries } = props;

  const onCopyFromDeliverySwitch = value => {
    console.log("Copy from delivery", value);
  };

  const onCopyFromDineInSwitch = value => {
    console.log("Copy from dine-in", value);
  };
  
  useEffect(() => {
    if (!isEmpty(dineInEntries)) {
      const records = [];
      for (const day in dineInEntries) {
        const date = moment(day, 'YYYY-MM-DD');
        const isopen = dineInEntries[day]["isOpen"];
        for (const hours of dineInEntries[day]["range"]) {
          records.push({
            date,
            isopen,
            range: hours
          })
        }
      }
      form.setFieldsValue({special: {dinein: records}});      
    }
    if (!isEmpty(deliveryEntries)) {
      const records = [];
      for (const day in deliveryEntries) {
        const date = moment(day, 'YYYY-MM-DD');
        const isopen = deliveryEntries[day]["isOpen"];
        for (const hours of deliveryEntries[day]["range"]) {
          records.push({
            date,
            isopen,
            range: hours
          })
        }
      }
      form.setFieldsValue({special: {delivery: records}});      
    }
  }, []);

  return (
    <div>
      <Row style={{fontWeight: "500"}}>Special Hours</Row>
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dine-in" key="1">
            <Row>
                <Col>Copy hours data from the delivery</Col>
                <Switch onChange={value => onCopyFromDeliverySwitch(value)}/>
            </Row>
            <Form.List name={["special", "dinein"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.length > 0 ? null : <Row><Button icon={<PlusCircleOutlined />} onClick={()=>add()}>Add New Special Hours</Button></Row>}
                  {fields.map(field => (
                    <Row key={field.key}>
                      <Form.Item>
                        <SpecialTimeEntry form={form} add={add} remove={remove} field={field}/>
                      </Form.Item>
                    </Row>
                  ))}
                </>
              )}
            </Form.List>
          </TabPane>
          <TabPane tab="Delivery" key="2">
            <Row>
                <Col>Copy hours data from the dine-in</Col>
                <Switch  onChange={value => onCopyFromDineInSwitch(value)} />
            </Row>
            <Form.List name={["special", "delivery"]}>
              {(fields, { add, remove }) => (
                <>
                  {fields.length > 0 ? null : <Row><Button icon={<PlusCircleOutlined />} onClick={()=>add()}>Add New Special Hours</Button></Row>}
                  {fields.map(field => (
                    <Row key={field.key}>
                      <Form.Item>
                        <SpecialTimeEntry form={form} add={add} remove={remove} field={field}/>
                      </Form.Item>
                    </Row>
                  ))}
                </>
              )}
            </Form.List>
          </TabPane>
        </Tabs>
      </Row>
      <Row>
        <Divider />
      </Row>
    </div>
  );
};

export default SpecialHoursGroup;
