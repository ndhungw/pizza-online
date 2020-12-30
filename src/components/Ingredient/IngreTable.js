import React from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { IconButton } from "@material-ui/core";
import InDeWeight from "./IncreDecreWeight";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
    maxWidth: 350,
    borderRadius: 30,
  },
  TableCell01: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#D2112D",
  },
  scrollTable: {
    overflowY: "scroll",
    height: "200px"
  },
});

export default function BasicTable({setMoney, Ingredient, setIngredient, maxWeight,  presentTotal, setPresentTotal}) {
  const classes = useStyles();
  let temp = 0;
  for (let i = 0; i < Ingredient.length; i++) {
    temp = temp + (Ingredient[i].weight / 50) * Ingredient[i].price;
  }
  setMoney(temp);
  function findItem(id){
    for(let i = 0; i< Ingredient.length; i++){
      if(Ingredient[i].id === id){
        return Ingredient[i];
      }
    }
  }
  const onDeleteItem = (id) =>{
        let ItemDelete = findItem(id);
        setPresentTotal(presentTotal-ItemDelete.weight)
        let data = Ingredient.filter((a)=>{
          return a.id !== ItemDelete.id;
        })
        setIngredient([...data]);
    };
  return (
    <TableContainer
      component={Paper}
      className={classes.scrollTable}
    >
      <Table
        className={classes.table}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              className={classes.TableCell01}
              align="center"
            >
              Nguyên liệu
            </TableCell>
            <TableCell
              className={classes.TableCell01}
              align="center"
            >
              Khối lượng
            </TableCell>
            <TableCell
              className={classes.TableCell01}
              align="center"
            >
              Giá
            </TableCell>
            <TableCell
             className={classes.TableCell01}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {Ingredient.map((row) => (
            <TableRow key={row.id} style={{ backgroundColor: "#033A56" }}>
              <TableCell style={{color: "white" }} align="center">
                {row.name}
              </TableCell>
              <TableCell style={{color: "white" }} align="center">
                <InDeWeight
                  id={row.id}
                  weight={row.weight}
                  Ingredient={Ingredient}
                  setIngredient={setIngredient}
                  maxWeight={maxWeight}
                  presentTotal={presentTotal}
                  setPresentTotal={setPresentTotal}
                />
              </TableCell>
              <TableCell style={{color: "white" }} align="center">
                {row.price}.000đ/50g
              </TableCell>
              <TableCell>
                <IconButton size="small" onClick={()=>onDeleteItem(row.id)}>
                  <HighlightOffIcon style={{color: "red" }}></HighlightOffIcon>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
