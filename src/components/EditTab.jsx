import React from 'react';
import { Tabs } from 'antd';
import BasicOutletInfoTab from './BasicOutletInfoTab';
import OperatingHoursTab from './OperatingHoursTab';

const { TabPane } = Tabs;

const EditTab = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Basic Outlet Info" key="1">
        <BasicOutletInfoTab />
      </TabPane>
      <TabPane tab="Operating Hours" key="2">
        <OperatingHoursTab />
      </TabPane>
    </Tabs>
  );
};

export default EditTab;
