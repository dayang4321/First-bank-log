import React from 'react';
import Navigation from '../../components/Navigation1/Navigation';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   
    appBarSpacer: {
        height: 70
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding:'60px'
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
}));
  
const theme = createMuiTheme({
    typography: {
      fontFamily: 'Rubik, Poppins, sans-serif',
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': 'Rubik, sans-serif',
        },
      },
    },
  });



const Layout = (props) => {
 
  const location = useLocation();

  


    const classes = useStyles();

  
  let content = (
    <ThemeProvider theme={theme}>
    <CssBaseline />
  <>

  <Navigation/>
  <main className={classes.content}>
      <div className={classes.appBarSpacer} />
          {props.children}
      </main>
  
</>
</ThemeProvider>

  )

  if(location.pathname === '/signin') {
            content = <main>{props.children}</main>
  }

  return (          
            content
        )

}




export default Layout