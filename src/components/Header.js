import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Logo from "../assets/img/logo-website.png";
import { ButtonBase, IconButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// views


const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#3B3F49',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },

  appBarItem: {
    fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      marginLeft: theme.spacing(7),
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative" className={classes.appbar}>
      <Toolbar>
        <img src={Logo} alt="pizza company logo" width='30' height='30'></img>
        <ButtonBase className={classes.appBarItem} href="/" style={{marginRight:0, marginLeft:10, fontSize: 20, fontWeight: 'bold'}}>Pizza Company</ButtonBase>
        <ButtonBase className={classes.appBarItem} href="/menu">Menu</ButtonBase>
        <ButtonBase className={classes.appBarItem} href="/pizza-make">Tự Làm Bánh</ButtonBase>
        <ButtonBase className={classes.appBarItem} href="/sales">Khuyến Mãi</ButtonBase>
        <div style={{flexGrow: 1}}></div>
        <ButtonBase className={classes.appBarItem} href="/login">Đăng Nhập</ButtonBase>
        <ButtonBase className={classes.appBarItem} href="/register">Đăng Kí</ButtonBase>
        <ButtonBase className={classes.appBarItem} href="/cart">
          <ShoppingCartIcon></ShoppingCartIcon>
        </ButtonBase>
      </Toolbar>
    </AppBar>
  );
}

export default Header;