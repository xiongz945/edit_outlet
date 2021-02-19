import React from 'react';
import { Row } from "antd";
import OperationHoursGroup from './OperationHoursGroup';
import SpecialHoursGroup from './SpecialHoursGroup';
import ConnectedPlatformsList from "./ConnectedPlatformsList";

const OperatingHoursTab = () => {
    return (
        <div>
            <Row>
                <OperationHoursGroup />
            </Row>
            <Row>
                <SpecialHoursGroup />
            </Row>
            <Row>
                <ConnectedPlatformsList />
            </Row>
        </div>
    );
};

export default OperatingHoursTab;