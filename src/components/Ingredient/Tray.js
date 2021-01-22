import React, { useEffect, useState } from "react";
import "../../App.css";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import SelectSize from "./SelectSize";
import SelectCrust from "./SelectCrust";
import Increment from "./IncreDecrePizza";
import Table from "./IngreTable";
import AddIcon from '@material-ui/icons/Add';
import Equal from "../../assets/img/equal.png";
import { ButtonBase, Typography } from "@material-ui/core";
export default function Tray({
  sizeOption,
  crustOption,
  setSizeOption,
  setCrustOption,
  maxWeight,
  setMaxWeight,
  Ingredient,
  setIngredient,
  presentTotal,
  setPresentTotal
}) {
  const [priceSC, setPriceSC] = useState(0);
  const [priceS, setPriceS] = useState(20);
  const [priceC, setPriceC] = useState(20);
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    setPriceSC(priceS + priceC);
    setTotal((priceSC + money) * amount);
  });
  if (sizeOption === "Nhỏ") setMaxWeight(300);
  else if (sizeOption === "Vừa") setMaxWeight(400);
  else setMaxWeight(500);
  const addCart = () => {
    let data =[];
    setIngredient([...data]);
  }
  return (
    <Card class="tray">
      <Grid
        xs={12}
        class="contentCenter"
        style={{ fontFamily: "Damion", color: "#D2112D", fontSize: "50px" }}
      >
        Pizza
      </Grid>
      <br />
      <Grid container xs={12}>
        <Grid xs={1} />
        <Grid xs={3} class="contentCenter" margin="20px">
          <SelectSize
            label="Kích cỡ"
            sizeOption={sizeOption}
            setSizeOption={setSizeOption}
            setPriceS={setPriceS}
            priceS={priceS}
          />
        </Grid>
        <Grid xs={1} class="contentCenter"><AddIcon  style={{marginTop: "15px", marginLeft:"5px", marginRight: "5px"}}/></Grid>
        <Grid xs={3} class="contentCenter">
          <SelectCrust
            label="Đế bánh"
            crustOption={crustOption}
            setCrustOption={setCrustOption}
            setPriceC={setPriceC}
            priceC={priceC}
          />
        </Grid>
        <Grid xs={1} class="contentCenter"><img src={Equal} style={{width: "20px", height: "20px", marginTop: "15px", marginLeft: "10px"}} alt=""/></Grid>
        <Grid xs={3} class="contentCenter">
          <Grid xs={12} class="contentCenter" style={{ fontSize: "18px", marginLeft:"10px", marginTop: "12px" }}>
            <div>{priceSC}.000đ</div>
          </Grid>
        </Grid>
      </Grid>
      <br />
      <Grid container xs={12} style={{ fontSize: "20px" }}  class="contentCenter">
          <Table
            Ingredient={Ingredient}
            setIngredient={setIngredient}
            money={money}
            setMoney={setMoney}
            maxWeight={maxWeight}
            presentTotal={presentTotal}
            setPresentTotal={setPresentTotal}
          />
      </Grid>
      <br />
      <Grid container xs={12} style={{ fontSize: "20px" }} >
        <Grid item xs={1} />
        <Grid item xs={3}>Số lượng: </Grid>
        <Grid item xs={8}>
          <Increment amount={amount} setAmount={setAmount}/>
        </Grid>
      </Grid>
      {/* <Grid
        xs={12}
      >
         Số lượng:<Increment amount={amount} setAmount={setAmount}/>
      </Grid> */}
      <br />
      <br/>
      <Grid
        xs={12}
        style={{ fontWeight: "bold", fontSize: "20px" }}
        class="contentCenter"
      >
        Tổng tiền: {total}.000đ
      </Grid>
      <br />
      <Grid
        xs={12}
        style={{ fontWeight: "bold", fontSize: "20px" }}
        class="contentCenter"
      >
        <ButtonBase onClick={addCart}>
          <div
            style={{
              borderRadius: 20,
              paddingVertical: 15,
              paddingInline: 40,
              backgroundColor: "#D2112D",
            }}
          >
            <p style={{ fontWeight: "bold", color: "white", fontSize: 15 }}>
              Thêm vào giỏ
            </p>
          </div>
        </ButtonBase>
      </Grid>
      <br />
    </Card>
  );
}
