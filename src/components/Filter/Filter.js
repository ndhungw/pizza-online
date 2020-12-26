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
  },
  buttonsList: {
    margin: theme.spacing(0, 1),
  },
}));
export default function Filter() {
  const classes = useStyles();

  // Size options
  const [isSmallSizeClicked, setIsSmallSizeClicked] = useState(true);
  const [isMediumSizeClicked, setIsMediumSizeClicked] = useState(false);
  const [isLargeSizeClicked, setIsLargeSizeClicked] = useState(false);
  // Crust options
  const [isThickCrustClicked, setIsThickCrustClicked] = useState(true);
  const [isThinCrustClicked, setIsThinCrustClicked] = useState(false);

  return (
    <>
      <Paper className={classes.filter}>
        <div className={classes.filterItem}>
          <Typography>Kích thước</Typography>
          <div className={classes.buttonsList}>
            <Button
              onClick={() => setIsSmallSizeClicked(!isSmallSizeClicked)}
              className={classes.button}
              variant="contained"
              color={isSmallSizeClicked ? "primary" : "secondary"}
            >
              {"Nhỏ"}
            </Button>
            <Button
              onClick={() => setIsMediumSizeClicked(!isMediumSizeClicked)}
              className={classes.button}
              variant="contained"
              color={isMediumSizeClicked ? "primary" : "secondary"}
            >
              {"Vừa"}
            </Button>
            <Button
              onClick={() => setIsLargeSizeClicked(!isLargeSizeClicked)}
              className={classes.button}
              variant="contained"
              color={isLargeSizeClicked ? "primary" : "secondary"}
            >
              {"Lớn"}
            </Button>
          </div>
        </div>

        <div className={classes.filterItem}>
          <Typography>Loại đế</Typography>
          <div className={classes.buttonsList}>
            <Button
              onClick={() => setIsThickCrustClicked(!isThickCrustClicked)}
              className={classes.button}
              variant="contained"
              color={isThickCrustClicked ? "primary" : "secondary"}
            >
              {"Dày"}
            </Button>
            <Button
              onClick={() => setIsThinCrustClicked(!isThinCrustClicked)}
              className={classes.button}
              variant="contained"
              color={isThinCrustClicked ? "primary" : "secondary"}
            >
              {"Giòn"}
            </Button>
          </div>
        </div>
        <RangeSlider />
      </Paper>
    </>
  );
}
