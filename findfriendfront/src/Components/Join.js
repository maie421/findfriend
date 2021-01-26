import React from 'react';
import {Button,Link,TextField,Grid } from '@material-ui/core';

const Join = () => {
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <TextField id="standard-basic" label="이메일" />
        <TextField 
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password" label="패스워드" 
        />
        <TextField id="standard-basic" label="닉네임" />
        <Link href="/">
            <Button variant="outlined">
                확인
            </Button>
        </Link>
    </Grid>
     )
 }
 
 export default Join;