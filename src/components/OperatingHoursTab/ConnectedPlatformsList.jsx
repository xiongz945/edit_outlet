import React from 'react';
import { Row, List, Card } from 'antd';

const ConnectedPlatformsList = () => {
    const data = [
        'Grab',
        'FoodPanda',
        'Google',
        'Facebook',
        'Deliveroo',
      ];

    return (
        <div style={{width: "90%"}}>
            <Row style={{fontWeight: "500"}}>
                Connected Platforms
            </Row>
            <Row>
            <List
                style={{width: "90%", margin:"5% 0", borderRadius: "10px"}}
                header={<div style={{color: "#A2A2A2"}}>Platforms</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )} />
            </Row>
        </div>
    )
};

export default ConnectedPlatformsList;