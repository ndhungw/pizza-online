import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  slider: {
    width: 150,
    margin: theme.spacing(0, 1),
  },
}));

function valuetext(value) {
  return `${value}K`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([100, 300]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography>Khoảng giá</Typography>
      <Slider
        className={classes.slider}
        value={value}
        onChange={handleChange}
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks
        step={50}
        min={0}
        max={500}
        valueLabelDisplay="on"
        valueLabelFormat={(x) => `${x}K`}
        track="normal"
      />
    </div>
  );
}
