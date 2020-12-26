import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {},
}));

export default function SimpleSelect({
  label,
  options,
  defaultOptionValue,
  setOption,
}) {
  const classes = useStyles();
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={defaultOptionValue}
          onChange={handleChange}
          label={label}
          autoWidth
        >
          {options.map((option, index) => (
            <MenuItem value={index}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
