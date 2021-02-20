import React from 'react';
import { Row, Tabs, Divider } from 'antd';
import SpecialTimeTable from './SpecialTimeTable';

const { TabPane } = Tabs;

const SpecialHoursGroup = () => {
  return (
    <div>
      <Row>Special Hours</Row>
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dine-in" key="1">
            <SpecialTimeTable tabName={'Dine-in'} />
          </TabPane>
          <TabPane tab="Delivery" key="2">
            <SpecialTimeTable tabName={'Delivery'} />
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
