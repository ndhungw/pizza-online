import React, { useState } from "react";
import "../App.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import SimpleSelect from "../components/CustomPizzaCard/SimpleSelect";
import List from "../components/Ingredient/IngreList";
import Tray from "../components/Ingredient/Tray";
import Shrimp from "../assets/img/tom.jpg";
import Cuttle from "../assets/img/muc.jpg";
import Pork from "../assets/img/xongkhoi.jpg";
import OC from "../assets/img/ot.jpg";
import Vegt from "../assets/img/rau.jpg";
import Meat from "../assets/img/bo.jpg";
const HaiSan = [
  {
    id: 1,
    name: "Tôm càng",
    price: 20,
    image: Shrimp,
    weight: 0
  },
  {
    id: 2,
    name: "Tôm sú",
    price: 20,
    image: Shrimp,
    weight: 0
  },
  {
    id: 3,
    name: "Tôm thẻ",
    price: 20,
    image: Shrimp,
    weight: 0
  },
  {
    id: 4,
    name: "Mực ống",
    price: 20,
    image: Cuttle,
    weight: 0
  },
  {
    id: 5,
    name: "Mực trứng",
    price: 20,
    image: Cuttle,
    weight: 0
  },
  {
    id: 6,
    name: "Mực nang",
    price: 20,
    image: Cuttle,
    weight: 0
  },
];
const Thit = [
  {
    id: 7,
    name: "Thịt bò Úc",
    price: 20,
    image: Meat,
    weight: 0
  },
  {
    id: 8,
    name: "Thịt bò Mỹ",
    price: 20,
    image: Meat,
    weight: 0
  },
  {
    id: 9,
    name: "Thịt bò Nhật",
    price: 20,
    image: Meat,
    weight: 0
  },
  {
    id: 10,
    name: "Thị xông khói",
    price: 20,
    image: Pork,
    weight: 0
  },
  {
    id: 11,
    name: "Thịt một nắng",
    price: 20,
    image: Pork,
    weight: 0
  },
  {
    id: 12,
    name: "Thịt xá xíu",
    price: 20,
    image: Pork,
    weight: 0
  },
];
const RauCu = [
  {
    id: 13,
    name: "Ớt chuông",
    price: 10,
    image: OC,
    weight: 0
  },
  {
    id: 14,
    name: "Hạnh nhân",
    price: 20,
    image: OC,
    weight: 0
  },
  {
    id: 15,
    name: "Hành tây",
    price: 5,
    image: OC,
    weight: 0
  },
  {
    id: 16,
    name: "Phô mai",
    price: 15,
    image: Vegt,
    weight: 0
  },
  {
    id: 17,
    name: "Cà chua",
    price: 5,
    image: Vegt,
    weight: 0
  },
  {
    id: 18,
    name: "Tiêu xanh",
    price: 20,
    image: Vegt,
    weight: 0
  },
];
const data=[
  {
    id: 12,
    name: "Thịt xá xíu",
    price: 20,
    image: Pork,
    weight: 100
  },
  {
    id: 18,
    name: "Tiêu xanh",
    price: 20,
    image: Vegt,
    weight: 50
  },
]
const useStyles = makeStyles((theme) => ({
  test: {
    marginTop: theme.spacing(4),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [sizeOption, setSizeOption] = useState("Nhỏ");
  const [crustOption, setCrustOption] = useState("Dày");
  const [maxWeight, setMaxWeight] = useState(300);
  const [Ingredient, setIngredient] = useState(data);
  const [presentTotal, setPresentTotal] = useState(150);

  const onAddItem = (temp) => {
    if (presentTotal < maxWeight){
        let count =0;
        const newList = Ingredient.map((item) => {
          if (item.id === temp.id) {
            count = count + 1;
            const updatedItem = {
              ...item,
              weight: item.weight + temp.weight,
            };
            return updatedItem;
          }
          return item;
        });
      if (count)
          setIngredient(newList);
      else
          setIngredient([...Ingredient, temp])
      setPresentTotal(presentTotal+50)
    }
      else
        window.alert("Vượt quá giới hạn về khối lượng nhân!")
  };

  return (
    <Grid container xs={12}>
      <Grid xs={1}></Grid>
      <Grid xs={7} style={{}}>
        <br />
        <Grid
          xs={12}
          class="contentCenter"
          style={{ fontFamily: "Damion", color: "#D2112D", fontSize: "50px" }}
        >
          Làm bánh theo ý thích
        </Grid>
        <br />
        <br />
        <Grid xs={12} style={{ fontSize: "20px", fontWeight: "bold" }}>
          NHÂN BÁNH:
        </Grid>
        <Grid container xs={12} style={{ fontSize: "20px" }}>
          Quý khách vui lòng chọn tối đa:
          <div style={{ color: "red" }}>&nbsp;{maxWeight}gram</div>
        </Grid>
        <br />
        <Grid xs={12} style={{ fontSize: "20px", fontWeight: "bold" }}>
          <List HaiSan={HaiSan} Thit={Thit} RauCu={RauCu} onAddItem={onAddItem} />
        </Grid>
      </Grid>
      <Grid style={{ width: "10px" }}></Grid>
      <Grid xs={3}>
        <div
          className={classes.test}
          style={{ position: "fixed" }}
        >
          <Tray
            sizeOption={sizeOption}
            setSizeOption={setSizeOption}
            presentTotal={presentTotal}
            setPresentTotal={setPresentTotal}
            maxWeight={maxWeight}
            setMaxWeight={setMaxWeight}
            crustOption={crustOption}
            setCrustOption={setCrustOption}
            Ingredient={Ingredient}
            setIngredient={setIngredient}
          />
        </div>
      </Grid>
    </Grid>
  );
}
