import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const OverviewCard = (props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 295,
      width: "20vw",
      minWidth: "200px",
      height: 150,
      background: "#FFFFFF 0% 0% no-repeat padding-box",
      boxShadow: " 0px 8px 16px #0000000D",
      margin: "5px 0.5vw",
      borderRadius: "10px",
    },
    cardActionArea: {
      height: "100%",
      padding: "0px",
    },
    cardHead: {
      display: "flex",
      justifyContent: "space-between",
      padding: '12px 16px',
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
    cardFooter: {
      width: "100%",
      textAlign: "center",
      backgroundColor: '#F8F9FB'
    },
    cardFooterText: {
      font: "normal normal 600 18px/22px Lato",
      letterSpacing: 0,
      color: "#1B78EB",
      textAlign: "center",
     
    },
    total: {
      textAlign: "right",
      font: "normal normal 900 60px/72px Lato",
      letterSpacing: "0px",
      color: "#E0AD0F",
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardContent className={classes.cardHead}>
          <Typography variant="h5" component="h2" className={classes.cardTitle}>
            <Typography
              variant="caption"
              component="h2"
              className={classes.cardTitleUpper}
            >
              Total
            </Typography>
            <Typography
              variant="caption"
              component="h2"
              className={classes.cardTitleLower}
            >
              Users
            </Typography>
          </Typography>

          <Typography variant="h5" component="h2" className={classes.total}>
            {props.total}
          </Typography>
        </CardContent>
        <CardContent  className={classes.cardFooter} >
          <Typography variant="h5" className={classes.cardFooterText} component="a">
            See All
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  
  );
};

export default OverviewCard;
