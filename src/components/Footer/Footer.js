import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import pizzaCompanyIcon from "../../assets/img/pizzaCompanyIcon.svg";
import facebookIcon from "../../assets/img/facebookIcon.svg";
import instagramIcon from "../../assets/img/instagramIcon.svg";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    backgroundColor: "#005500",
    width: "100%",
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },

  verticalLineStyle: {
    width: 1,
    border: "none",
    height: "90%",
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  linkEffect: {
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
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container item xs={12} justify="center" className={classes.parent}>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={3}
        alignContent="flex-start"
        justify="flex-start"
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <div className={classes.logo}>
          <img
            src={pizzaCompanyIcon}
            style={{
              marginLeft: 20,
              width: 50,
              height: 50,
            }}
            alt="PizzaCompanyIcon"
          />
          &nbsp;
          <Typography
            variant="subtitle1"
            align="justify"
            style={{
              color: "white",
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Instant Pizza
          </Typography>
        </div>
      </Grid>

      <Box
        component={Grid}
        container
        item
        md={1}
        display={{ xs: "none", md: "flex" }}
        justify="center"
      >
        <Divider className={classes.verticalLineStyle} />
      </Box>

      <Grid
        container
        item
        xs={12}
        sm={5}
        md={2}
        alignContent="flex-start"
        justify="flex-start"
        style={{
          flexDirection: "column",
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
        }}
      >
        <Typography
          variant="subtitle1"
          align="justify"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          GIỚI THIỆU
        </Typography>
        <Typography
          className={classes.linkEffect}
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
        >
          Hệ thống nhà hàng
        </Typography>
        <Typography
          className={classes.linkEffect}
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
        >
          Câu chuyện thương hiệu
        </Typography>
        <Typography
          className={classes.linkEffect}
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
        >
          Ưu đãi thành viên
        </Typography>
        <Typography
          className={classes.linkEffect}
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
        >
          Tuyển dụng
        </Typography>
      </Grid>

      <Box
        component={Grid}
        container
        item
        sm={2}
        md={1}
        display={{ xs: "none", sm: "flex" }}
        justify="center"
      >
        <Divider className={classes.verticalLineStyle} />
      </Box>

      <Grid
        container
        item
        xs={12}
        sm={5}
        md={3}
        alignContent="flex-start"
        justify="flex-start"
        style={{
          flexDirection: "column",
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
        }}
      >
        <Typography
          variant="subtitle1"
          align="justify"
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          LIÊN HỆ
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          className={classes.linkEffect}
        >
          Hướng dẫn mua hàng
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          className={classes.linkEffect}
        >
          Dịch vụ giao hàng
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          className={classes.linkEffect}
        >
          Chính sách bảo mật
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          className={classes.linkEffect}
        >
          Điều khoản và điều kiện
        </Typography>
      </Grid>
      <Box
        component={Grid}
        container
        item
        md={1}
        display={{ xs: "none", md: "flex" }}
        justify="center"
      >
        <Divider className={classes.verticalLineStyle} />
      </Box>

      <Grid
        container
        item
        xs={12}
        sm={12}
        md={1}
        alignContent="flex-start"
        justify="flex-start"
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingLeft: 20,
        }}
      >
        <Typography
          variant="subtitle1"
          align="justify"
          style={{
            width: "100%",
            color: "white",
            fontWeight: "bold",
          }}
        >
          FOLLOW US ON
        </Typography>
        <Link to={"#"}>
          <img
            src={facebookIcon}
            style={{
              width: 24,
              height: 24,
              marginRight: 10,
            }}
            alt="facebookIcon"
          />
        </Link>

        <Link to={"#"}>
          <img
            src={instagramIcon}
            style={{
              width: 24,
              height: 24,
            }}
            alt="instagramIcon"
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
