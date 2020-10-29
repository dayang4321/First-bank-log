import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import OverviewCard from './OverviewCard/OverviewCard';
import CreateProfile from './CreateProfile/CreateProfile';


const Overview = () => {

    const useStyles = makeStyles({
      box: { display: 'flex',
            flexDirection: 'row',
            flexGrow: 1,
        },
        title: {
            textAlign: 'left',
font: 'normal normal 900 27px/33px Lato',
letterSpacing: '0px',
            color: '#181818',
margin: '0px 0px 20px 8px'
        }
    })

    const classes = useStyles();

    return (
        <>
        <Typography className={classes.title}>
            Overview
        </Typography>
        <Box className={classes.box}>
            <OverviewCard total={251} />
            <CreateProfile/>
            </Box>
            </>
    );
}

export default Overview;