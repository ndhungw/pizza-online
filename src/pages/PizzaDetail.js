import React from "react";
import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import PageSectionName from "../components/PizzaDetail/PageSectionName";
import PizzaName from "../components/PizzaDetail/PizzaName";
import { PizzaDescription } from "../components/PizzaDetail/PizzaDescription";
import { PizzaIngredients } from "../components/PizzaDetail/PizzaIngredients";
import { PizzaTags } from "../components/PizzaDetail/PizzaTags";

import pizzaImgUrl from "../assets/img/pizzaImg.png";
import ActionsOnPizza from "../components/PizzaDetail/ActionsOnPizza";
import CommentSection from "../components/CommentSection/CommentSection";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    overflow: "visible",
    boxSizing: "border-box",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  middleColumn: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
  },
}));

const pizzaTags = [
  {
    id: 1,
    tagName: "Best-selling",
    tagColor: "#FFAF10",
  },
  {
    id: 2,
    tagName: "Recommended",
    tagColor: "#00CC52",
  },
  {
    id: 3,
    tagName: "Chef's pick",
    tagColor: "pink",
  },
  {
    id: 4,
    tagName: "HOT",
    tagColor: "red",
  },
];

const pizzaPrice = 200;

const PizzaDetail = (props) => {
  const classes = useStyles();

  const [size, setSize] = useState(0);
  const [crust, setCrust] = useState(0);

  const PizzaImg_Id = "PizzaImage";

  const getTotalPrice = (size, crust, pizzaPrice) => {
    const formatter = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
    const equation = (pizzaPrice + size * 10 + (1 - crust) * 5) * 1000;
    return formatter.format(equation);
  };

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        {/* use this if you use app bar <div className={classes.appBarSpacer} /> */}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid container item xs={12}>
              <PageSectionName fontVariant="h4" />
            </Grid>
            {/* Under page title, there lies the  */}
            <Grid container item xs={12} justify="center">
              <PizzaName pizzaName="Pizza phô mai xúc xích Đức" />
            </Grid>
            {/* Under the title we divide it into 3 big columns */}

            {/* This is the left column */}
            <Grid
              container
              item
              xs={4}
              justify="center"
              alignContent="flex-start"
            >
              <PizzaDescription />
              <Grid
                item
                xs={12}
                style={{
                  height: 150,
                }}
              />
              <PizzaTags pizzaTags={pizzaTags} />
            </Grid>

            {/* This is the middle column */}
            <Grid
              container
              item
              xs={4}
              justify="center"
              className={classes.middleColumn}
            >
              <Grid item xs={12}>
                <img
                  id={PizzaImg_Id}
                  src={pizzaImgUrl}
                  alt="Hello, you found the easter egg"
                  style={{
                    width: "100%",
                  }}
                />
              </Grid>

              <Grid
                container
                item
                xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignSelf: "end",
                }}
              >
                <Typography
                  color="textPrimary"
                  align="center"
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Giá bán :
                </Typography>
                &nbsp;
                <Typography color="textPrimary" align="center" variant="h5">
                  {/* equation to calculate pizza price based on size and crust */}
                  {getTotalPrice(size, crust, pizzaPrice)}
                </Typography>
              </Grid>
            </Grid>

            {/* This is the right column */}
            <Grid
              container
              item
              xs={4}
              justify="center"
              alignContent="flex-start"
            >
              <PizzaIngredients />
            </Grid>

            {/* Under the three columns, we have a row for actions on the pizza */}
            <Grid
              container
              item
              xs={12}
              justify="center"
              alignContent="flex-start"
            >
              <ActionsOnPizza
                onSizeChange={(size) => {
                  setSize(size);
                }}
                onCrustChange={(crust) => {
                  setCrust(crust);
                }}
              />
            </Grid>

            {/* Comment section starts here */}
            <Grid
              container
              item
              xs={12}
              style={{
                marginTop: 100,
              }}
            >
              <PageSectionName fontVariant="subtitle1" name="Bình luận" />
            </Grid>

            <Grid container item xs={12}>
              <CommentSection />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default PizzaDetail;
