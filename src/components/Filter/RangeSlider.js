import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#3B3F49",
      },
      track: {
        color: "#FED400",
      },
      rail: {
        color: "#3B3F49",
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  slider: {
    minWidth: 150,
    [theme.breakpoints.down("xs")]: {
      minWidth: 100,
    },
    [theme.breakpoints.up("lg")]: {
      minWidth: 100,
    },
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
      <ThemeProvider theme={muiTheme}>
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
      </ThemeProvider>
    </div>
  );
}
