import React from "react";
// material-ui
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { IconButton, InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  root: {
    width: "100%",
    overflowX: "auto",
  },

  table: {
  },

  count: {
    width: 75,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#D2112D",
    color: "white",
    fontWeight: "bold",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#033A56",
  },
}))(TableRow);



export default function CartTable({ cartData, setCartData, setCount }) {
  const classes = useStyles();

  const onClickDelete = (index) => {
    console.log(index);

    const newData = cartData.filter((a, i) => {
      return i !== index;
    })
    console.log(newData);
    setCartData([...newData]);
  }
  return (
    <TableContainer className={classes.root}>
      <Table className={classes.table} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ borderTopLeftRadius: 30 }}>
              <div style={{ marginLeft: "20px" }}>Tên bánh</div>
            </StyledTableCell>
            <StyledTableCell align="center">Kích cỡ</StyledTableCell>
            <StyledTableCell align="center">Đế bánh</StyledTableCell>
            <StyledTableCell align="right">Đơn giá</StyledTableCell>
            <StyledTableCell align="center">Số lượng</StyledTableCell>
            <StyledTableCell
              style={{ borderTopRightRadius: 30 }}
            ></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartData.map((row, index) => (
            <StyledTableRow key={row.name}>
              <TableCell style={{ color: "white" }} component="th" scope="row">
                <div style={{ marginLeft: "20px" }}>{row.name}</div>
              </TableCell>
              <TableCell
                style={{
                  color: "white",
                }}
                align="center"
              >
                {row.size}
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {row.crust}
              </TableCell>
              <TableCell style={{ color: "white" }} align="right">
                {row.price}
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                <div>
                  <IconButton onClick={() => setCount(index, -1)}>
                    <RemoveCircleOutlineIcon
                      style={{ color: "white" }}
                    ></RemoveCircleOutlineIcon>
                  </IconButton>
                  {/* <TextField
                    className={classes.count}
                    width="30"
                    value={row.count} 
                    inputProps={{min: 0, style: { textAlign: 'center', backgroundColor: 'white' }}}></TextField> */}
                  <InputBase
                    className={classes.count}
                    inputProps={{
                      min: 0,
                      style: {
                        textAlign: "center",
                        backgroundColor: "white",
                        borderRadius: 30,
                      },
                    }}
                    value={row.count}
                  ></InputBase>
                  <IconButton onClick={() => setCount(index, 1)}>
                    <AddCircleOutlineIcon
                      style={{ color: "white" }}
                    ></AddCircleOutlineIcon>
                  </IconButton>
                </div>
              </TableCell>
              <TableCell align="center">
                <IconButton onClick={() => onClickDelete(index)}>
                  <HighlightOffIcon style={{ color: "red" }}></HighlightOffIcon>
                </IconButton>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
