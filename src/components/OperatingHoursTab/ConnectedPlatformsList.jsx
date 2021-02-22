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
        <div>
            <Row>
                Connected Platforms
            </Row>
            <Row>
            <Card>
            <List
                header={<div>Platforms</div>}
                bordered
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        {item}
                    </List.Item>
                )} />
            </Card>
            </Row>
        </div>
    )
};

export default ConnectedPlatformsList;