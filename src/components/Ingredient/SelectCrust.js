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
  crustOption, setCrustOption, setPriceC, priceC
}) {
  const classes = useStyles();
  const handleChange = (event) => {
    setCrustOption(event.target.value);
  };
  if (crustOption === "Dày")
    {
      setPriceC(20)
    }
  else
    {
      setPriceC(30)
    }

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{label}</InputLabel>
        <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined"  value={crustOption}  onChange={handleChange} label={label} autoWidth >
            <MenuItem value="Dày">Dày</MenuItem>
            <MenuItem value="Giòn">Giòn</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
