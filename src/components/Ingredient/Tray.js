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
export default function Tray({
  sizeOption,
  crustOption,
  setSizeOption,
  setCrustOption,
  setWeight,
}) {
  const [priceSC, setPriceSC] = useState(0);
  const [priceS, setPriceS] = useState(20);
  const [priceC, setPriceC] = useState(20);
  const [money, setMoney] = useState(0);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);
  const [Ingredient, setIngredient] = useState([
    {
      id: 4,
      name: "Mực ống",
      weight: 100,
      price: 20,
    },
    {
      id: 3,
      name: "Tôm thẻ",
      weight: 100,
      price: 20,
    },
    {
      id: 13,
      name: "Ớt chuông",
      weight: 100,
      price: 20,
    },
  ]);
  useEffect(() => {
    setPriceSC(priceS + priceC);
    setTotal((priceSC + money) * amount);
  });
  if (sizeOption === "Nhỏ") setWeight(300);
  else if (sizeOption === "Vừa") setWeight(400);
  else setWeight(500);

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
        <Grid xs={3} class="contentCenter">
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
        <Grid xs={1} class="contentCenter"><img src={Equal} style={{width: "20px", height: "20px", marginTop: "15px", marginLeft: "10px"}}/></Grid>
        <Grid xs={3} class="contentCenter">
          <Grid xs={12} class="contentCenter" style={{ fontSize: "18px", marginLeft:"10px", marginTop: "12px" }}>
            {/* <div>Thành tiền</div> */}
            <div>{priceSC}.000đ</div>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* <Grid container xs={12} style={{ fontSize: "20px" }}>
        <Grid xs={1} />
        <Grid xs={11}>Nhân bánh:</Grid>
      </Grid> */}
      <Grid class="contentCenter" xs={12} style={{ fontSize: "20px" }}>
        <div>
          <Table
            Ingredient={Ingredient}
            setIngredient={setIngredient}
            money={money}
            setMoney={setMoney}
          />
        </div>
      </Grid>
      <br />
      <Grid container xs={12} style={{ fontSize: "20px" }}>
        <Grid xs={1} />
        <Grid xs={3}>Số lượng:</Grid>
        <Grid xs={8}>
          <Increment amount={amount} setAmount={setAmount} />
        </Grid>
      </Grid>
      <br />
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
        <button
          style={{
            height: "40px",
            fontSize: "20px",
            borderRadius: "15px",
            backgroundColor: "#D2112D",
            color: "white",
            width: "full",
          }}
        >
          Thêm vào giỏ
        </button>
      </Grid>
      <br />
    </Card>
  );
}
