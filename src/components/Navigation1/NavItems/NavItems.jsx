import React from 'react';

import NavItem from './NavItem/NavItem';



import './NavItems.css'

const itemMap = [
    { text: 'Dashboard', route: '/' },
    { text: 'Users', route: '/users' },
    { text: 'Logs', route: '/logs' },
]



const NavItems = (props) => {


    return (
    <>
            {itemMap.map((item, index) => (            
                <NavItem key={index} text={item.text} img={item.src} imgAlt={item.text} route={item.route} />                
            ))}  
    </>    
    
);
}
export default NavItems;