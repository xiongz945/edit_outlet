import React, { useEffect } from 'react';
import { message, Row, Col, Button, Form, Popconfirm } from 'antd';
import { connect, history } from 'umi';
import BasicInfo from './BasicInfo';
import ConnectedPlatformsGroup from './ConnectedPlatformsGroup';
import ServiceOptions from './ServiceOptions';
import { options } from '../../utils/constants';
import styles from './index.less';

const onServiceOptionsChange = (changedFields, form) => {
    const { name, value } = changedFields[0];
    if (name && name.includes("service-options") && name.includes("options")) {
        if (value.length === options.length) {
            form.setFieldsValue({ 'service-options':{all: true}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{all: false}} );
        }
    } else if (name && name.includes("service-options") && name.includes("all")) {
        if (value === true) {
            form.setFieldsValue({ 'service-options':{options}} );
        }
        else {
            form.setFieldsValue({ 'service-options':{options: []}} );
        }
    }
}


export const BasicOutletInfoTab = (props) => {
    const [ form ] = Form.useForm();
    const { outlet } = props;

    const onSave = (values) => {
        console.log('Success', values);
        const { dispatch } = props;
        dispatch({
            type: 'outlet/saveOutlet',
            payload: values
        });
        const key = "success";
        message.success({content: "Outlet information has been saved", key});
    }

    const confirm = _ => {
        history.push('/');
    }

    useEffect(()=> {
        const { dispatch } = props;
        dispatch({
            type: 'outlet/fetchConnectedPlatforms'
        });
        // dispatch({
        //     type: 'outlet/fetchSavedOutlet'
        // });
    }, []);


    return (
        <Form 
            form={form} 
            layout="vertical"
            initialValues={{
                "brand-name": outlet.brandName,
                "outlet-name": outlet.outletName,
                "phone-number": outlet.phoneNumber,
                "address": outlet.address,
                "service-options": {
                    "all": outlet.serviceOptions.all,
                    "options": outlet.serviceOptions.options
                }
            }} 
            requiredMark={false}
            onFieldsChange={
                (changedFields,_) => onServiceOptionsChange(changedFields, form)
            }
            onFinish={onSave}
        >
            <Row>
                <BasicInfo />
            </Row>
            <Row>
                <ConnectedPlatformsGroup platforms={outlet.connectedPlatforms} />
            </Row>
            <Row style={{marginTop: "15%"}}>
                <ServiceOptions form={form} options={options}/>
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
    )
};

export default connect(({ outlet }) => ({
    outlet,
}))(BasicOutletInfoTab);