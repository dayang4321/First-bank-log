import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Button, Typography } from "@material-ui/core";
import LogsTable from "./LogsTable/LogsTable";
import LogChart from "./LogChart/LogChart";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    boxShadow: "0px 8px 16px #0000000D",
    borderRadius: "10px",
  },
  button: {
    height: "40px",
    color: "white",
    font: "normal normal 600 18px/22px Lato",
    textTransform: "capitalize",
    float: "right",
    backgroundColor: "#022E64",
    width: "115px",
    marginLeft: "auto",
      borderRadius: "10px",
    marginTop: "20px",
  },
  title: {
    textAlign: "left",
    font: "normal normal 900 27px/33px Lato",
    letterSpacing: "0px",
    color: "#181818",
    margin: "24px 0px 20px 8px",
  },
  cardTitle: {
    font: "normal normal 600 20px/40px Rubik",
    letterSpacing: 0,
    color: "#04014E",
    verticalAlign: "middle",
  },
  cardTitleUpper: {
    font: "normal normal 500 18px/34px Lato",
    letterSpacing: 0,
    color: "#AEBAC9",
    verticalAlign: "middle",
    textAlign: "left",
    textTransform: "uppercase",
  },
  cardTitleLower: {
    font: "normal normal 600 28px/34px Lato",
    letterSpacing: 0,
    color: "#666D92",
    verticalAlign: "middle",
    textAlign: "left",
    textTransform: "capitalize",
  },
}));

const RecentLogs = (props) => {
  const classes = useStyles();

  return (
      <>
             <Typography className={classes.title}>Recent Logs</Typography>
          <Grid container xs={12} spacing={4}>

      <Grid item md={6}>
           
            
        <Paper className={classes.paper}>
          <Button
            color="primary"
            variant="contained"
            className={classes.button}
          >
            See all
          </Button>
          <LogsTable />
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <Typography
              variant="caption"
              component="h2"
              className={classes.cardTitleUpper}
            >
              Disputes
            </Typography>
            <Typography
              variant="caption"
              component="h2"
              className={classes.cardTitleLower}
            >
              Status
            </Typography>
          </Typography>
          <LogChart />
        </Paper>
      </Grid>
    
          </Grid>
      </>
  );
};

export default RecentLogs;
