import React, { useState } from "react";
import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// From this project
import RangeSlider from "./RangeSlider";

const useStyles = makeStyles((theme) => ({
  filter: {
    display: "flex",
    justifyContent: "center",
    padding: theme.spacing(1, 0),
  },
  filterItem: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0, 1),
  },
  button: {
    margin: theme.spacing(0, 0.5),
    fontWeight: "bold",
  },
  optionButtonClicked: {
    margin: theme.spacing(0, 0.5),
    backgroundColor: "#FED400",
    color: "#3B3F49",
    fontWeight: "bold",
  },
  buttonsList: {
    margin: theme.spacing(0, 1),
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
    <>
      <Paper className={classes.filter}>
        <div className={classes.filterItem}>
          <Typography>{"Sắp xếp theo"}</Typography>
          <div className={classes.buttonsList}>
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
                isBestSellerClicked
                  ? classes.optionButtonClicked
                  : classes.button
              }`}
              variant="contained"
            >
              {"Bán chạy"}
            </Button>
          </div>
        </div>

        <div className={classes.filterItem}>
          <Typography>{"Thứ tự giá"}</Typography>
          <div className={classes.buttonsList}>
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
          </div>
        </div>
        <RangeSlider />
      </Paper>
    </>
  );
}
