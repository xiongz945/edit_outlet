import React from 'react';
import { ConfigProvider, Tabs } from 'antd';
import BasicOutletInfoTab from './BasicOutletInfoTab';
import OperatingHoursTab from './OperatingHoursTab';
import enUS from 'antd/lib/locale/en_US';


const { TabPane } = Tabs;

const EditTab = () => {
  return (
    <ConfigProvider locale={enUS}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Outlet Info" key="1">
          <BasicOutletInfoTab />
        </TabPane>
        <TabPane tab="Operating Hours" key="2">
          <OperatingHoursTab />
        </TabPane>
      </Tabs>
    </ConfigProvider>
  );
};

export default EditTab;
