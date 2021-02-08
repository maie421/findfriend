import React from 'react';
import {Button,Link,TextField,Grid } from '@material-ui/core';

export default ({
    onSubmit,
    name,
    email,
    password,
    c_password,
    onChange
}) => {
    return (
        <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
      >
        <TextField id="standard-basic" label="email" name="email" value={email} onChange={onChange} />
        <TextField id="standard-basic" label="nickname" name="name" value={name} onChange={onChange} />
        <TextField 
            id="standard-password-input"
            label="Password"
            type="password"
            name="password"
            value={password} onChange={onChange}
        />
        <TextField 
            id="standard-password-input"
            label="Password"
            type="password"
            name="c_password"
            value={c_password} onChange={onChange}
        />

        <Button variant="outlined" onClick={onSubmit}>
            확인
        </Button>
    </Grid>
     )
 };