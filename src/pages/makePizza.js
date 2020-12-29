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
  },
  {
    id: 2,
    name: "Tôm sú",
    price: 20,
    image: Shrimp,
  },
  {
    id: 3,
    name: "Tôm thẻ",
    price: 20,
    image: Shrimp,
  },
  {
    id: 4,
    name: "Mực ống",
    price: 20,
    image: Cuttle,
  },
  {
    id: 5,
    name: "Mực trứng",
    price: 20,
    image: Cuttle,
  },
  {
    id: 6,
    name: "Mực nang",
    price: 20,
    image: Cuttle,
  },
];
const Thit = [
  {
    id: 7,
    name: "Thịt bò Úc",
    price: 20,
    image: Meat,
  },
  {
    id: 8,
    name: "Thịt bò Mỹ",
    price: 20,
    image: Meat,
  },
  {
    id: 9,
    name: "Thịt bò Nhật",
    price: 20,
    image: Meat,
  },
  {
    id: 10,
    name: "Thị xông khói",
    price: 20,
    image: Pork,
  },
  {
    id: 11,
    name: "Thịt một nắng",
    price: 20,
    image: Pork,
  },
  {
    id: 12,
    name: "Thịt xá xíu",
    price: 20,
    image: Pork,
  },
];
const RauCu = [
  {
    id: 13,
    name: "Ớt chuông",
    price: 10,
    image: OC,
  },
  {
    id: 14,
    name: "Hạnh nhân",
    price: 20,
    image: OC,
  },
  {
    id: 15,
    name: "Hành tây",
    price: 5,
    image: OC,
  },
  {
    id: 16,
    name: "Phô mai",
    price: 15,
    image: Vegt,
  },
  {
    id: 17,
    name: "Cà chua",
    price: 5,
    image: Vegt,
  },
  {
    id: 18,
    name: "Tiêu xanh",
    price: 20,
    image: Vegt,
  },
];

const useStyles = makeStyles((theme) => ({
  test: {
    marginTop: theme.spacing(4),
  },
}));

export default function Menu() {
  const classes = useStyles();
  const [sizeOption, setSizeOption] = useState("Nhỏ");
  const [crustOption, setCrustOption] = useState("Dày");
  const [weight, setWeight] = useState(300);
  //style={{ top: 5, height: "80px" }} t xoa cai nay khoi cai Grid root de no khong bay lo lung nua
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
        {/* <Grid container xs={12} style={{fontSize:"20px", fontWeight: "bold"}} >
                        <Grid container xs={4} >
                                 ĐẾ BÁNH:
                                 &nbsp; &nbsp;
                                <SimpleSelect  defaultOptionValue={crustOption} options={crustOptions} setOption={setCrustOption} />
                        </Grid>
                        <Grid xs={5}></Grid>
                        <Grid container xs={3}>
                            KÍCH CỠ:
                            &nbsp; &nbsp;
                            <SimpleSelect defaultOptionValue={sizeOption} options={sizeOptions} setOption={setSizeOption}/>
                        </Grid>
                    </Grid> */}
        <Grid xs={12} style={{ fontSize: "20px", fontWeight: "bold" }}>
          NHÂN BÁNH:
        </Grid>
        <Grid container xs={12} style={{ fontSize: "20px" }}>
          Quý khách vui lòng chọn tối đa:
          <div style={{ color: "red" }}>&nbsp;{weight}gram</div>
        </Grid>
        <br />
        <Grid xs={12} style={{ fontSize: "20px", fontWeight: "bold" }}>
          <List HaiSan={HaiSan} Thit={Thit} RauCu={RauCu} />
        </Grid>
      </Grid>
      <Grid style={{ width: "50px" }}></Grid>
      <Grid xs={3}>
        <div
          className={classes.test}
          style={{ position: "fixed", width: "400px" }}
        >
          <Tray
            sizeOption={sizeOption}
            setSizeOption={setSizeOption}
            setWeight={setWeight}
            crustOption={crustOption}
            setCrustOption={setCrustOption}
          />
        </div>
      </Grid>
    </Grid>
  );
}
