import React from 'react';
import { Route } from 'react-router-dom';
import {Button,Link,Box} from '@material-ui/core';
import FilterOutlinedIcon from '@material-ui/icons/FilterOutlined';

const Main = () => {
    return (
        <>
    <Box color="white" p={1} style={{textAlign:'center'}}>
    <FilterOutlinedIcon color="action" style={{ fontSize: 200 ,marginTop:50}}/>
    </Box>
        <div style={{textAlign:'center',marginTop:50}}>
            <Route>
                <Link href="/wait">
                    <Button variant="contained" color="primary">
                        매칭
                    </Button>
                </Link>
            </Route>
        </div>
        </>
     )
 }
 
 export default Main;