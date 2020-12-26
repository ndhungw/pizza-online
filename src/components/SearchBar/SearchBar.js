import React from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(2, 0),
  },
  search: {
    display: "flex",
    alignItems: "center",
  },
  searchIcon: {
    margin: theme.spacing(0, 1),
  },
  inputBase: {
    width: "100%",
  },
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.search}>
        <SearchIcon className={classes.searchIcon} />
        <InputBase className={classes.inputBase} placeholder="Search here" />
        <IconButton>
          <ClearIcon />
        </IconButton>
      </div>
    </Paper>
  );
}
