import React from 'react';
import { Row } from 'antd';
import EditTab from '../../components/EditTab';
import styles from './index.less';

const Edit = () => {
    return (
        <div className={styles.main}>
            <Row>
                <h1><b>Edit Outlet</b></h1>
            </Row>
            <Row>
                <EditTab />
            </Row>

        </div>
    );
}

export default Edit;