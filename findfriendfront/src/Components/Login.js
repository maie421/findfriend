import React from 'react';
import {Button,Link,TextField,Grid } from '@material-ui/core';

const Login = () => {
    return (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <TextField id="standard-basic" label="닉네임" />
        <Link href="/main">
            <Button variant="outlined">
                확인
            </Button>
        </Link>
        <Link href="/join">
            <Button  variant="contained" color="primary">
                회원 가입
            </Button>
        </Link>
    </Grid>
     );
 }
 
 export default Login;