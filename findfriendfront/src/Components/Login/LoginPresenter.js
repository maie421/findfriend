import React from 'react';
import {Button,Link,TextField,Grid } from '@material-ui/core';

export default ({
    onSubmit,
    email,
    password,
    onChange
}) => {
    return (
    <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <TextField id="standard-basic" label="email" name="email" value={email} onChange={onChange}/>
        <TextField 
            id="standard-password-input"
            type="password"
            name="password"
            label="password"
            value={password} onChange={onChange}
        />
        {/* <Link href="/main" > */}
            <Button variant="outlined" onClick={onSubmit}>
                확인
            </Button>
        {/* </Link> */}
        <Link href="/join">
            <Button  variant="contained" color="primary">
                회원 가입
            </Button>
        </Link>
        
    </Grid>
    
     )};
