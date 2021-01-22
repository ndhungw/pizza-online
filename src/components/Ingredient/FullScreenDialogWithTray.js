import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import { Box } from "@material-ui/core";
import Logo from "../../assets/img/logo-website.png";
import Tray from "./Tray";
import "../../App.css";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#005500",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  appBarItem: {
    marginLeft: theme.spacing(3),
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none",
    color: "#000",

    transition: theme.transitions.create(["color", "transform"], {
      duration: theme.transitions.duration.complex,
    }),
    "&:hover": {
      color: "#f3d438",
    },
    "&.active": {
      color: "#f3d438",
    },
  },

  space: {
    margin: theme.spacing(1, 0),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function FullScreenDialog({
  open,
  setOpen,
  sizeOption,
  setSizeOption,
  presentTotal,
  setPresentTotal,
  maxWeight,
  setMaxWeight,
  crustOption,
  setCrustOption,
  Ingredient,
  setIngredient,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      PaperProps={{
        style: {
          opacity: 0.9,
        },
      }}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Box component="div" style={{ display: "flex" }}>
            <img
              src={Logo}
              alt="pizza company logo"
              width="30"
              height="30"
            ></img>
            <Box
              href="/"
              style={{
                marginRight: 0,
                marginLeft: 10,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {"INSTANT PIZZA"}
            </Box>
          </Box>

          <Box style={{ flexGrow: 1 }} />

          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box className={classes.space} />

      <Grid container xs={12} justify="center">
        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <Tray
            key="456"
            sizeOption={sizeOption}
            setSizeOption={setSizeOption}
            presentTotal={presentTotal}
            setPresentTotal={setPresentTotal}
            maxWeight={maxWeight}
            setMaxWeight={setMaxWeight}
            crustOption={crustOption}
            setCrustOption={setCrustOption}
            Ingredient={Ingredient}
            setIngredient={setIngredient}
            marginBottom={200}
          />
        </div>
      </Grid>
    </Dialog>
  );
}
