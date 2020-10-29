import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AuthForm from './AuthForm/AuthForm';
import Logo from '../../components/UI/Logo/Logo';


//Create Custom Material UI Theme - Set Primary Color
const theme = createMuiTheme({
    palette: {
        primary: {           
            main: '#022E64',
        }
    }
})

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#E0AD0F',
  },
  mid: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center',
},
  paper: {
    margin: theme.spacing('auto', 'auto'),
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 3px 26px #00000029',
    padding: '0 20px',
    maxHeight: '719px',
  },
 
  form: {
    margin: theme.spacing('auto', 'auto'),
    maxWidth: '488px',
    minWidth: '230px',
    textAlign: 'center',
    paddingBottom: '19vh',
  },


  submit: {
    margin: theme.spacing(2, 0, 2),
    height:'50px',
    color: 'white',
    font: 'normal normal bold 20px/24px Lato',
    textTransform: 'capitalize',
  },
  link: {
    margin: theme.spacing(1, 0, 0),
    font: 'normal normal bold 20px/24px Lato',
  }


}));

export default function SignInSide() {
  const classes = useStyles();

  React.useEffect(() => {
    sessionStorage.clear('isAuth')
 },[])

    return (
      <ThemeProvider theme={theme}>
    <Grid container component="main" className={classes.root}>
                <CssBaseline />  
         
      <Grid item className={classes.paper} xs={11} sm={10} md={8} lg={7} xl={6} >
        <div className={classes.form}>    
              <Logo/>
              <AuthForm submitStyles={classes.submit} linkStyles={classes.link} />
            </div>
          </Grid>
            </Grid>  
                
            </ThemeProvider>
  );
}
