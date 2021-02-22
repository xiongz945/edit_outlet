import React from 'react';
import { Row, Col, Switch, Tabs } from 'antd';
import TimeEntry from './TimeEntry';

const { TabPane } = Tabs;

const OperationHoursGroup = (props) => {
  const { dineInEntries, deliveryEntries, form } = props;

  const onCopyFromDeliverySwitch = value => {
    if (value) {
      console.log(form.getFieldValue(["operation"]));
      const operation = form.getFieldValue(["operation"]);
      for (const day in operation) {
        if (operation[day].hasOwnProperty("delivery")) {
          form.setFieldsValue({operation: {[day]: {dinein: operation[day]["delivery"]}}});
        }
      }
    }
  };

  const onCopyFromDineInSwitch = value => {
    if (value) {
      console.log(form.getFieldValue(["operation"]));
      const operation = form.getFieldValue(["operation"]);
      for (const day in operation) {
        if (operation[day].hasOwnProperty("dinein")) {
          form.setFieldsValue({operation: {[day]: {delivery: operation[day]["dinein"]}}});
        }
      }
    }
  };

  return (
    <div>
      <Row style={{fontWeight: "500"}}>Operation Hours</Row>
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dine-in" key="1">
            <Row style={{margin:"2% 0 10% 0"}}>
                <Col span={15} >Copy hours data from the delivery</Col>
                <Col span={9}>
                  <Switch onChange={value => onCopyFromDeliverySwitch(value)}/>
                </Col>
            </Row>
            {dineInEntries.map(entry => (
              <Row key={entry.day}>
                  <TimeEntry entry={entry} hourType="dinein" form={form}/>
              </Row>
            ))}

          </TabPane>
          <TabPane tab="Delivery" key="2">
            <Row style={{margin:"2% 0 10% 0"}}>
                <Col span={15}>Copy hours data from the dine-in</Col>
                <Col span={9}><Switch onChange={value => onCopyFromDineInSwitch(value)} /></Col>
            </Row>
            {deliveryEntries.map(entry => (
              <Row key={entry.day}>
                <TimeEntry entry={entry} hourType="delivery" form={form}/>
              </Row>
            ))}
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default OperationHoursGroup;
