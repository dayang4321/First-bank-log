import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CreateProfile = (props) => {
  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      maxWidth: "1314px",
      height: 150,
      background: "#E0AD0F 0% 0% no-repeat padding-box",
      boxShadow: " 0px 8px 16px #0000000D",
      margin: "5px 0.5vw",
          borderRadius: "10px",
          display: 'flex',
      justifyContent: 'flex-end'
    },
    cardActionArea: {
        padding: "0px",
        width: 'initial',
    },
    cardHead: {
      display: "flex",
      justifyContent: "space-between",
      padding: "12px 16px",
    },
    cardTitle: {
        color: "#FFFFFF",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      alignItems:'center'
      },
      cardTitleText: {
        font: "normal normal 900 27px/33px Lato",
        letterSpacing: 0,
          color: "#FFFFFF",
          display: 'flex',
          marginRight: '12px',
      }
    ,
      cardTitleInner: {
      
         display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        verticalAlign: "middle",
        height: '48px',
        width: '48px',
        backgroundColor: '#022E64',
        borderRadius: '50%',
        lineHeight: '48px',
          textAlign: 'center',
        
      },
      cardTitleInnerText: {
        fontSize: "52px",
          lineHeight: '48px'
      }
 
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
              className={classes.cardTitleText}
            >
           Profile a new user
            </Typography>
            <Typography
              variant="caption"
              component="h2"
              className={classes.cardTitleInner}>
                          <Typography variant="caption"
              component="span"   className={classes.cardTitleInnerText} > ＋ </Typography>
             
            </Typography>
          </Typography>

        
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CreateProfile;
