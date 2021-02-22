import React from 'react';
import { Row, Col, Tabs, Divider, Form, Switch, Button } from 'antd';
import SpecialTimeEntry from './SpecialTimeEntry';
import { PlusCircleOutlined } from '@ant-design/icons';
const { TabPane } = Tabs;

const SpecialHoursGroup = (props) => {
  const { form } = props;

  const onCopyFromDeliverySwitch = value => {
    console.log("Copy from delivery", value);
  };

  const onCopyFromDineInSwitch = value => {
    console.log("Copy from dine-in", value);
  };

  return (
    <div>
      <Row>Special Hours</Row>
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
                        <SpecialTimeEntry add={add} remove={remove} field={field}/>
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
                        <SpecialTimeEntry add={add} remove={remove} field={field}/>
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
