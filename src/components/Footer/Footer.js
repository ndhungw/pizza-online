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
    padding: 10,
    marginTop: 30,
  },

  verticalLineStyle: {
    width: 3,
    border: "none",
    height: "100%",
    backgroundColor: "black",
    alignSelf: "center",
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
        <img
          src={pizzaCompanyIcon}
          style={{
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
          }}
        >
          The Pizza Company
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
        sm={5}
        md={2}
        alignContent="flex-start"
        justify="flex-start"
        style={{
          flexDirection: "column",
          marginTop: 10,
          marginBottom: 10,
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
          Giới thiệu
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Hệ thống nhà hàng
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Câu chuyện thương hiệu
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Ưu đãi thành viên
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
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
          Liên hệ
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Hướng dẫn mua hàng
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dịch vụ giao hàng
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Chính sách bảo mật
        </Typography>
        <Typography
          component={Link}
          to={"#"}
          variant="body2"
          align="justify"
          style={{
            color: "white",
            textDecoration: "none",
          }}
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
          Follow Us
        </Typography>
        <Link to={"#"}>
          <img
            src={facebookIcon}
            style={{
              width: 24,
              height: 24,
              marginRight: 5,
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
