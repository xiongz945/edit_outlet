import React from 'react';
import { Button } from 'antd';
import { Link } from 'umi';


const HomePage = () => {
    return (
        <Link to={{pathname: "./edit"}}>
            <Button>Edit Outlet</Button>
        </Link>
    );
};

export default HomePage;