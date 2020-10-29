import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles((theme) => ({
  row: {
    '&:nth-of-type(even)': {
      backgroundColor: '#F6F6F6',
    },
  },
  headerRow: {
    font: 'normal normal 500 14px/17px Lato',
    letterSpacing: 0,
    color: '#AEBAC9',
 },
 
}));

const MyTable = (props) => {
  
  const classes = useStyles();

  const headerRow = props.config.map((item, index) => {
    return <TableCell key={index} className={classes.headerRow}>{item.header}</TableCell>
  })

  const tableBody = props.data.map((item, index) => {

    let tableData = [];

    tableData = Object.values(item).map((cellData, index) => {
      
      return (<TableCell key={index} className={props.config[index].styles}>{true&&props.config[index].image}<span>{cellData}</span></TableCell>)
    })
    return (<TableRow className={classes.row} key={index}>
          {tableData}
    </TableRow>)
})

  return (
   
      <Table size="small">
        <TableHead>
          <TableRow>
           {headerRow}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody}
        </TableBody>
      </Table>
   
    
  );
}

export default MyTable