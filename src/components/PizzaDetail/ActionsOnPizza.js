import React from "react";
import { useState } from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { Select, MenuItem } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import IncrementDecrementBox from "../IncrementDecrementBox/IncrementDecrementBox";
import { Button } from "@material-ui/core";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    flexDirection: "row",
  },
  addCardButton: {
    backgroundColor: "#FED400",
    height: 55,
  },
  addCartIcon: {
    color: "#272B37",
  },
}));

const ActionsOnPizza = ({ onSizeChange, onCrustChange }) => {
  const classes = useStyles();

  const sizeOptions = ["Nhỏ", "Vừa", "Lớn"];
  const crustOptions = ["Dày", "Giòn"];
  const [sizeOption, setSizeOption] = useState(0);
  const [crustOption, setCrustOption] = useState(0);

  const handleSizeChange = (event) => {
    setSizeOption(event.target.value);
    if (onSizeChange) {
      onSizeChange(event.target.value);
    }
  };

  const handleCrustChange = (event) => {
    setCrustOption(event.target.value);
    if (onCrustChange) {
      onCrustChange(event.target.value);
    }
  };

  return (
    <Grid container item xs={12} justify="center" className={classes.parent}>
      {/* 2 combo boxes here */}
      <Grid
        container
        item
        xs={12}
        md={7}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {/* Choose pizza size */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container item xs={12} sm={4} justify="flex-start">
            <Typography
              color="textPrimary"
              align="center"
              variant="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              Kích cỡ:
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={8} justify="left">
            <Select
              variant="standard"
              value={sizeOption}
              onChange={(e) => handleSizeChange(e)}
              style={{
                width: "70%",
              }}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              {sizeOptions.map((val, idx) => (
                <MenuItem key={"pizzaSizeOption" + idx} value={idx}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        {/* Choose pizza crust */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container item xs={12} sm={4} justify="flex-start">
            <Typography
              color="textPrimary"
              align="left"
              variant="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              Đế bánh:
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={8} justify="left">
            <Select
              value={crustOption}
              onChange={(e) => handleCrustChange(e)}
              variant="standard"
              style={{
                width: "70%",
              }}
              MenuProps={{
                disableScrollLock: true,
              }}
            >
              {crustOptions.map((val, idx) => (
                <MenuItem key={"pizzaCrustOption" + idx} value={idx}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Grid>

      {/* cart and box here */}
      <Grid
        container
        item
        xs={12}
        md={5}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {/* Choose pizza amount */}
        <Grid
          container
          item
          xs={12}
          sm={10}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container item xs={9} sm={3} justify="flex-start">
            <Typography
              color="textPrimary"
              align="left"
              variant="h6"
              style={{
                fontWeight: "bold",
                justifySelf: "flex-start",
              }}
            >
              Số lượng:
            </Typography>
          </Grid>
          <Grid container item xs={12} sm={9} justify="left">
            <div
              style={{
                width: "70%",
                justifySelf: "flex-end",
              }}
            >
              <IncrementDecrementBox />
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={2}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <Button
            className={classes.addCardButton}
            variant="contained"
            size="large"
          >
            <AddShoppingCartRoundedIcon className={classes.addCartIcon} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ActionsOnPizza;
