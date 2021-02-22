import React from 'react';
import { Row, List, Card } from 'antd';

const ConnectedPlatformsList = (props) => {
    const {platforms} = props;

    return (
        <div style={{width: "95%"}}>
            <Row style={{fontWeight: "500"}}>
                Connected Platforms
            </Row>
            <Row>
            <List
                style={{width: "100%", margin:"5% 0 10% 0", borderRadius: "10px"}}
                header={<div style={{color: "#A2A2A2"}}>Platforms</div>}
                bordered
                dataSource={platforms}
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