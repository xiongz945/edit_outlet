import React from 'react';
import { Row, Tabs } from 'antd';
import TimeTable from './TimeTable';

const { TabPane } = Tabs;

const OperationHoursGroup = () => {
  return (
    <div>
      <Row>Operation Hours</Row>
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dine-in" key="1">
            <TimeTable tabName={'Dine-in'} />
          </TabPane>
          <TabPane tab="Delivery" key="2">
            <TimeTable tabName={'Delivery'} />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default OperationHoursGroup;
