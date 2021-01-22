import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CartTable from "../components/Cart/CartTable";
import { ButtonBase, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  summary: {
    marginTop: theme.spacing(3),
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(12),
    paddingRight: theme.spacing(12),
  },
  pageContent: {
    backgroundColor: "red",
  },
}));

const StyledSum = withStyles(() => ({
  root: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 25,
    // lineHeight: 42,
    color: "#000000",
  },
}))(Typography);

function createData(name, size, crust, price, count) {
  return { name, size, crust, price, count };
}

const Cart = () => {
  const classes = useStyles();
  const [sum, setSum] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const rows = [
      createData("Pizza", "Lớn", "Dày", 150000, 10),
      createData("Pizza Đặc Biệt", "Lớn", "Dày", 150000, 3),
    ];
    setData(rows);
    calculateSum(rows);
  }, []);

  useEffect(() => {
    calculateSum(data);
  },[data])

  const calculateSum = (cartData) => {
    let newSum = 0;
    cartData.map((row) => {
      newSum += row.price * row.count;
      return newSum; // to solve eslint warning
    });

    setSum(newSum);
  };

  const setCount = (index, amount) => {
    const newData = data.slice();
    if (newData[index].count + amount > 0) {
      newData[index].count += amount;
      setData(newData);
      calculateSum(data);
    }
  };

  return (
    <Container style={{ paddingTop: 50 }}>
      <CartTable cartData={data} setCount={setCount} setCartData={setData}></CartTable>
      <div className={classes.summary}>
        <StyledSum style={{ marginRight: 10 }}>Tổng tiền: </StyledSum>
        <StyledSum>{sum}</StyledSum>
        <ButtonBase style={{ marginLeft: 30 }} href="/payment">
          <div
            style={{
              borderRadius: 20,
              paddingVertical: 15,
              paddingInline: 40,
              backgroundColor: "#D2112D",
            }}
          >
            <p style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Thanh Toán
            </p>
          </div>
        </ButtonBase>
      </div>
    </Container>
  );
};

export default Cart;
