import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// assets
import Logo from "../../assets/img/logo-website.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#005500",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  appBarItem: {
    marginLeft: theme.spacing(7),
    fontSize: 16,
    fontWeight: "bold",
    textDecoration: "none",
    color: "#fff",

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
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar positionFixed className={classes.appBar}>
      <Toolbar>
        <img src={Logo} alt="pizza company logo" width="30" height="30"></img>
        <ButtonBase
          className={classes.appBarItem}
          href="/"
          style={{
            marginRight: 0,
            marginLeft: 10,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Pizza Company
        </ButtonBase>
        <NavLink to="/menu" className={classes.appBarItem}>
          MENU
        </NavLink>
        <NavLink to="/make-pizza" className={classes.appBarItem}>
          TỰ LÀM BÁNH
        </NavLink>
        <NavLink to="/sales" className={classes.appBarItem}>
          KHUYẾN MÃI
        </NavLink>

        <div style={{ flexGrow: 1 }}></div>
        <NavLink to="/login" className={classes.appBarItem}>
          ĐĂNG NHẬP
        </NavLink>
        <NavLink to="/register" className={classes.appBarItem}>
          ĐĂNG KÝ
        </NavLink>
        <NavLink to="/cart" className={classes.appBarItem}>
          <ShoppingCartIcon></ShoppingCartIcon>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
