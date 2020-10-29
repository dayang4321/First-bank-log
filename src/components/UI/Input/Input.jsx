import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  input: {

  },
}))

const Input = (props) => {
 
  const classes = useStyles();

    return (
      <TextField
    className={classes.input}
    variant="filled"
    margin="normal"
    fullWidth
    inputProps={{autoComplete:false}}
    id={props.inputType}
    type={props.inputType}
    name={props.inputType}
    autoComplete={props.inputType}
   {...props}
  />
);}

export default Input;