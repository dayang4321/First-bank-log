import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';



const NavItem = (props) => {
    
    return (    
    <ListItem component={NavLink} style={{margin:'0 10px'}} to={props.route} exact activeStyle={{backgroundColor: '#022E64', color: '#FFFFFF'}} button key={props.text}>
    <ListItemText primary={props.text} />
    </ListItem>
);
}
export default NavItem;