import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// From this project
import RangeSlider from "./RangeSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, 0),
  },
  filterItem: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1, 1),
  },
  button: {
    margin: theme.spacing(0.5, 0.5),
    fontWeight: "bold",
  },
  optionButtonClicked: {
    margin: theme.spacing(0.5, 0.5),
    backgroundColor: "#FED400",
    color: "#3B3F49",
    fontWeight: "bold",
  },
  rangePriceCpnt: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 1),
    },
  },
}));
export default function Filter() {
  const classes = useStyles();
  // Tag order options
  const [isPopularClicked, setIsPopularClicked] = useState(true);
  const [isLatestClicked, setIsLatestClicked] = useState(false);
  const [isBestSellerClicked, setIsBestSellerClicked] = useState(false);
  // Price order options
  const [fromLowToHighClicked, setFromLowToHighClicked] = useState(true);
  const [fromHighToLowClicked, setFromHighToLowClicked] = useState(false);

  const handlePopularButton = () => {
    setIsPopularClicked(true);
    setIsLatestClicked(false);
    setIsBestSellerClicked(false);
  };
  const handleLatestButton = () => {
    setIsLatestClicked(true);
    setIsPopularClicked(false);
    setIsBestSellerClicked(false);
  };
  const handleBestSellerButton = () => {
    setIsBestSellerClicked(true);
    setIsPopularClicked(false);
    setIsLatestClicked(false);
  };
  const handleLowToHighButton = () => {
    setFromLowToHighClicked(true);
    setFromHighToLowClicked(false);
  };

  const handleHighToLowButton = () => {
    setFromHighToLowClicked(true);
    setFromLowToHighClicked(false);
  };
  return (
    <Grid
      container
      xs={12}
      lg={12}
      justify="space-between"
      className={classes.root}
    >
      {/* Sap xep theo */}
      <Grid
        item
        xs={12}
        lg={4}
        container
        justify="flex-start"
        className={classes.filterItem}
      >
        <Grid item xs={3} sm={2} lg={2}>
          <Typography>{"Sắp xếp"}</Typography>
        </Grid>
        <Grid item xs={9} sm={10} lg={10}>
          <Button
            onClick={handlePopularButton}
            className={`${
              isPopularClicked ? classes.optionButtonClicked : classes.button
            }`}
            variant="contained"
          >
            {"Phổ biến"}
          </Button>
          <Button
            onClick={handleLatestButton}
            variant="contained"
            className={`${
              isLatestClicked ? classes.optionButtonClicked : classes.button
            }`}
          >
            {"Mới nhất"}
          </Button>
          <Button
            onClick={handleBestSellerButton}
            className={`${
              isBestSellerClicked ? classes.optionButtonClicked : classes.button
            }`}
            variant="contained"
          >
            {"Bán chạy"}
          </Button>
        </Grid>
      </Grid>

      {/* Thu tu gia */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={5}
        container
        justify="flex-start"
        className={classes.filterItem}
      >
        <Grid item xs={3} sm={2} lg={2}>
          <Typography>{"Thứ tự giá"}</Typography>
        </Grid>
        <Grid item xs={9} sm={10} lg={10}>
          <Button
            onClick={handleLowToHighButton}
            variant="contained"
            className={`${
              fromLowToHighClicked
                ? classes.optionButtonClicked
                : classes.button
            }`}
          >
            {"Từ thấp đến cao"}
          </Button>
          <Button
            onClick={handleHighToLowButton}
            variant="contained"
            className={`${
              fromHighToLowClicked
                ? classes.optionButtonClicked
                : classes.button
            }`}
          >
            {"Từ cao đến thấp"}
          </Button>
        </Grid>
      </Grid>

      {/* Khoang gia */}
      <Grid
        item
        xs={12}
        sm={12}
        lg={2}
        justify="flex-start"
        className={clsx(classes.filterItem, classes.rangePriceCpnt)}
        container
      >
        <Grid
          item
          xs={3}
          sm={2}
          lg={5}
          alignItems="center"
          alignContent="center"
        >
          <Typography>{"Khoảng giá"}</Typography>
        </Grid>
        <Grid item xs={9} sm={5} md={4} lg={7}>
          <RangeSlider />
        </Grid>
      </Grid>
    </Grid>
  );
}
