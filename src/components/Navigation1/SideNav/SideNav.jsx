import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import NavItems from '../NavItems/NavItems';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {

    const { toggleState, toggleSideNav } = props;
  const classes = useStyles();

  const navList = (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleSideNav}
      onKeyDown={toggleSideNav}>
     <NavItems/>
    </div>
  );

  return (
      <div> 
          <Drawer anchor="left" open={toggleState} onClose={toggleSideNav}>
            {navList}
          </Drawer>
    </div>
  );
}
