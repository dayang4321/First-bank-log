import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Overview from "../../components/Dashboard/Overview/Overview";
import RecentLogs from "../../components/Dashboard/RecentLogs/RecentLogs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    background: "#F6F6F6 0% 0 % no-repeat padding-box",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    boxShadow: "0px 8px 16px #0000000D",
    borderRadius: "10px",
  },

  fixedHeight: {
    height: 240,
  },
  title: {
    font: "normal normal 600 25px/28px Rubik",
    letterSpacing: 0,
    color: "#2C2C2C",
    paddingLeft: theme.spacing(2),
  },

  titleCell: {
    display: "flex",
    alignItems: "center",
  },

  charactersCell: {
    color: "#178924",
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
  },
}));

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container direction="column">
        <Overview />

        <RecentLogs />
      </Grid>
    </Container>
  );
};

export default Dashboard;
