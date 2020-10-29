import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
import MyTable from '../../../UI/Table/MyTable';


const LogsTable = () => {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
        },
        container: {
              paddingTop: theme.spacing(4),
              paddingBottom: theme.spacing(4),
              background: '#F6F6F6 0% 0 % no-repeat padding-box',
        },
        paper: {
          padding: theme.spacing(2),
          display: 'flex',
          overflow: 'auto',
          flexDirection: 'column',
          boxShadow: '0px 3px 6px #00000029',
          border: '0.4000000059604645px solid #055CC13B',
          },
        
        fixedHeight: {
          height: 240,
          },
          title: {
              font: 'normal normal 600 25px/28px Rubik',
              letterSpacing: 0,
              color: '#2C2C2C',
              paddingLeft: theme.spacing(2),
          },
        
          titleCell: {
              display: 'flex',
              alignItems: 'center',
          },
      
          charactersCell: {
              color: '#178924'
        },      
      
    }));
    const classes = useStyles();
      

    const usersTableConfig = [{ header: 'Status', styles: classes.titleCell, image: null },
    { header: 'Type', styles: null, image: null },
        { header: 'Date', styles: null, image: null },]
    
    const usersTable = [
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
        { status: 'Resolved', type: 'Notification', date: '13/10/2020 at 08:18:16 AM' },
    ]


    return (
        <MyTable data={usersTable} config={usersTableConfig}/>
    );
}

export default LogsTable;