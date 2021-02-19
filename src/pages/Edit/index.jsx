import React from 'react';
import { Row } from 'antd';
import EditTab from '../../components/EditTab';

const Edit = () => {
    return (
        <div>
            <Row>
                <h1>Edit Outlet</h1>
            </Row>
            <Row>
                <EditTab />
            </Row>

        </div>
    );
}

export default Edit;