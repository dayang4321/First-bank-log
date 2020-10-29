import React from 'react';

import { createMuiTheme,ThemeProvider } from '@material-ui/core/styles';





import MyToolbar from './Toolbar/Toolbar';
import SideDrawer from './SideNav/SideNav';



const theme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#ffffff',
        }
    },
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
})






const Navigation = () => {


    const [open, setOpen] = React.useState(false);
    const handleDrawerToggler = () => {
      setOpen(!open);
    };

 
  
    
    
    return (
        <ThemeProvider theme={theme}>
        <MyToolbar toggleSideNav={handleDrawerToggler} toggleState={open}/>
            
         <SideDrawer toggleSideNav={handleDrawerToggler} toggleState={open}/>
        </ThemeProvider>

    
    );
}


export default Navigation;