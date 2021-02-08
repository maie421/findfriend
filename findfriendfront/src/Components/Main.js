import React from 'react';
import { Route } from 'react-router-dom';
import { Button, Link, Box } from '@material-ui/core';
import FilterOutlinedIcon from '@material-ui/icons/FilterOutlined';

const Main = () => {
    return (
        <>
            <div style={{ textAlign: 'center', marginTop: 50 }}>
                <Route>
                    <Link href="/acceptmatching">
                        <Button variant="contained" color="primary">
                        매칭
                        </Button>
                    </Link>
                </Route>
            </div>
        </>
    );
}

export default Main;