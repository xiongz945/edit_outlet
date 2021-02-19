import React, {useState} from 'react';
import { Row, Col, Checkbox, Divider } from 'antd';

const options = ['Dine-in', 'Delivery', 'Takeout'];

const ServiceOptions = () => {
    const [checkedList, setCheckedList] = useState([]);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = list => {
        setCheckedList(list);
        setCheckAll(list.length === options.length);
    };
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? options : []);
        setCheckAll(e.target.checked);
    };

    return (
        <Row>
            <Row>Service Options</Row>
            <Divider />
            <Row>
                <Col>
                    <Checkbox checked={checkAll} onChange={onCheckAllChange}>All</Checkbox>
                </Col>
                <Col>
                    <Checkbox.Group options={options} value={checkedList} onChange={onChange}/>
                </Col>
            </Row>
        </Row>
    )
};

export default ServiceOptions;