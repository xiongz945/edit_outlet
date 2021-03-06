import React from 'react';
import { Row, Col, Button, Form, Popconfirm, message } from "antd";
import { history, connect } from 'umi';
import OperationHoursGroup from './OperationHoursGroup';
import SpecialHoursGroup from './SpecialHoursGroup';
import ConnectedPlatformsList from "./ConnectedPlatformsList";
import styles from './index.less';

const OperatingHoursTab = (props) => {
    const [ form ] = Form.useForm();
    const { outlet } = props;
    const onSave = (values) => {
        console.log('Success', values);
        const { dispatch } = props;
        dispatch({
            type: 'outlet/saveOperatingHours',
            payload: values
        });
        message.success({content: "Operating hours have been saved", key:"saveSuccess"});
    }

    const onSaveFailed = (values) => {
        message.error({content:"Please fill in all missing data",key:"saveError"});
    }

    const confirm = _ => {
        history.push('/');
    }

    const onValuesChange = (changedValues) => {
        console.log(changedValues);
    }

    return (
        <Form
            form={form}
            onFinish={onSave}
            onFinishFailed={onSaveFailed}
            onValuesChange={onValuesChange}
        >
            <Row>
                <OperationHoursGroup 
                    dineInEntries={outlet.operatingHoursForDineIn}
                    deliveryEntries={outlet.operatingHoursForDelivery}
                    form={form} 
                />
            </Row>
            <Row>
                <SpecialHoursGroup 
                    form={form}
                    dineInEntries={outlet.specialHoursForDineIn}
                    deliveryEntries={outlet.specialHoursForDelivery}
                />
            </Row>
            <Row>
                <ConnectedPlatformsList platforms={outlet.connectedPlatforms} />
            </Row>
            <Row justify="start">
                <Col xl={12} md={12} sm={24}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={styles.submitBtn}>Save</Button>
                    </Form.Item>
                </Col>
                <Col xl={12} md={12} sm={24}>
                    <Popconfirm
                        title="Cancel without saving?"
                        onConfirm={confirm}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="default" className={styles.cancelBtn}>Cancel</Button>
                    </Popconfirm>
                </Col>
            </Row>
        </Form>
    );
};

export default connect(({ outlet }) => ({
    outlet,
}))(OperatingHoursTab);