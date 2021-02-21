import React from 'react';
import { Row, Col, Switch, Tabs, Form } from 'antd';
import TimeEntry from './TimeEntry';

const { TabPane } = Tabs;

const OperationHoursGroup = (props) => {
  const { dineInEntries, deliveryEntries } = props;
  console.log(dineInEntries);
  return (
    <div>
      <Row>Operation Hours</Row>
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dine-in" key="1">
            <Row>
                <Col>Copy hours data from the delivery</Col>
                <Switch />
            </Row>
            {dineInEntries.map(entry => (
              <Row key={entry.day}>
                <TimeEntry entry={entry} />
              </Row>
            ))}
          </TabPane>
          <TabPane tab="Delivery" key="2">
            {/* <TimeTable tabName={'Delivery'} /> */}
            <Row>
                <Col>Copy hours data from the dine-in</Col>
                <Switch />
            </Row>
            {dineInEntries.map(entry => (
              <Row key={entry.day}>
                <TimeEntry entry={entry} />
              </Row>
            ))}
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default OperationHoursGroup;
