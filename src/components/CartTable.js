import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { IconButton, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    backgroundColor: theme.palette.primary.light,
  },

  count: {
    width: 50,
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function createData(name, size, crust, price, count) {
  return { name, size, crust, price, count };
}

const rows = [
  createData('Pizza', "Lớn", "Dày", 150000, 4),
  createData('Pizza Đặc Biệt', "Lớn", "Dày", 150000, 3),
  
];

export default function CartTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên bánh</StyledTableCell>
            <StyledTableCell align="center">Kích cỡ</StyledTableCell>
            <StyledTableCell align="center">Đế bánh</StyledTableCell>
            <StyledTableCell align="right">Giá Tiền</StyledTableCell>
            <StyledTableCell align="center">Số lượng</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.size}</TableCell>
              <TableCell align="center">{row.crust}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="center">
                <div>
                  <IconButton>
                    <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </IconButton>
                  <TextField
                    className={classes.count}
                    width="30"
                    value={row.count} 
                    inputProps={{min: 0, style: { textAlign: 'center' }}}></TextField>
                  <IconButton>
                    <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                  </IconButton>
                </div>
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <HighlightOffIcon color="secondary"></HighlightOffIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}