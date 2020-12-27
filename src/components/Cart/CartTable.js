import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
import { IconButton, InputBase, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },

  count: {
    width: 75,
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#D2112D',
    color: 'white',
    fontWeight: 'bold',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: '#033A56',

  },
}))(TableRow);





export default function CartTable({ cartData, setCount }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ borderTopLeftRadius: 30 }}>Tên bánh</StyledTableCell>
            <StyledTableCell align="center">Kích cỡ</StyledTableCell>
            <StyledTableCell align="center">Đế bánh</StyledTableCell>
            <StyledTableCell align="right">Giá Tiền</StyledTableCell>
            <StyledTableCell align="center">Số lượng</StyledTableCell>
            <StyledTableCell style={{ borderTopRightRadius: 30 }}></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {cartData.map((row, index) => (
            <StyledTableRow key={row.name}>
              <TableCell style={{ color: 'white' }} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                style={{
                  color: 'white'
                }} align="center">{row.size}</TableCell>
              <TableCell style={{ color: 'white' }} align="center">{row.crust}</TableCell>
              <TableCell style={{ color: 'white' }} align="right">{row.price}</TableCell>
              <TableCell style={{ color: 'white' }} align="center">
                <div>
                  <IconButton onClick={() => setCount(index, 1)}>
                    <AddCircleOutlineIcon style={{ color: 'white' }}></AddCircleOutlineIcon>
                  </IconButton>
                  {/* <TextField
                    className={classes.count}
                    width="30"
                    value={row.count} 
                    inputProps={{min: 0, style: { textAlign: 'center', backgroundColor: 'white' }}}></TextField> */}
                  <InputBase
                    className={classes.count}
                    inputProps={{ min: 0, style: { textAlign: 'center', backgroundColor: 'white', borderRadius: 30 } }}
                    value={row.count}>
                  </InputBase>
                  <IconButton onClick={() => setCount(index, -1)}>
                    <RemoveCircleOutlineIcon style={{ color: 'white' }}></RemoveCircleOutlineIcon>
                  </IconButton>
                </div>
              </TableCell>
              <TableCell align="center">
                <IconButton>
                  <HighlightOffIcon style={{ color: 'red' }}></HighlightOffIcon>
                </IconButton>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}