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
  sizeOption, setSizeOption, setPriceS, priceS, onSize
}) {
  const classes = useStyles();
  const handleChange = (event) => {
    setSizeOption(event.target.value);
  };
  if (sizeOption === "Nhỏ")
    {
      setPriceS(20)
    }
    else if (sizeOption === "Vừa")
    {
      setPriceS(30)
    }
   else
    {
      setPriceS(40)
    }

  return (
    <div>
        <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label" htmlFor="select">{label}</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"  id="demo-simple-select-outlined" onChange={handleChange} value={sizeOption} label={label} autoWidth>
            <MenuItem value="Nhỏ">Nhỏ</MenuItem>
            <MenuItem value="Vừa">Vừa</MenuItem>
            <MenuItem value="Lớn">Lớn</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
