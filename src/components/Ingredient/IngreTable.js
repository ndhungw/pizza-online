import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconButton } from '@material-ui/core';
import InDeWeight from "./IncreDecreWeight";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 350,
    borderRadius: 30
  },
});

export default function BasicTable({Ingredient, setIngredient, money, setMoney}) {
  const classes = useStyles();
  let temp = 0;
  for(let i = 0; i< Ingredient.length; i++){
        temp=temp+Ingredient[i].weight/50*Ingredient[i].price
  }
  setMoney(temp)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead style={{backgroundColor: "#D2112D"}}>
          <TableRow>
            <TableCell style={{color: "white", fontWeight: "bold" }} align="center">Tên</TableCell>
            <TableCell style={{color: "white", fontWeight: "bold" }} align="center">Khối lượng</TableCell>
            <TableCell style={{color: "white", fontWeight: "bold" }} align="center">Giá</TableCell>
            <div></div>
          </TableRow>
        </TableHead>
        <TableBody>
          {Ingredient.map((row) => (
            <TableRow key={row.id} style={{backgroundColor: "#033A56"}}>
              <TableCell style={{color: "white"}} align="center">{row.name}</TableCell>
              <TableCell style={{color: "white"}} align="center"><InDeWeight id={row.id} weight={row.weight} Ingredient={Ingredient} setIngredient={setIngredient}/></TableCell>
              <TableCell style={{color: "white"}} align="center">{row.price}.000</TableCell>
              <div><IconButton>
                  <HighlightOffIcon style={{ color: 'red' }}></HighlightOffIcon>
                </IconButton></div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
