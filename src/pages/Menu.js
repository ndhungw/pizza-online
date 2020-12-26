import React from "react";
// Material-ui
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";
// From this project
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";
import PizzaCard from "../components/CustomPizzaCard/PizzaCard";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: theme.spacing(10),
  },
  searchAndFilter: {
    // display: "flex",
    margin: theme.spacing(4, 0, 4, 0),
    // justifyContent: "space-between",
    // justifyContent: "center",
    // flexWrap: "wrap",
  },
}));

const items = [
  {
    name: "ABC1",
    price: "123",
  },
  {
    name: "ABC2",
    price: "123",
  },
  {
    name: "ABC3",
    price: "123",
  },
  {
    name: "ABC1",
    price: "123",
  },
  {
    name: "ABC2",
    price: "123",
  },
  {
    name: "ABC3",
    price: "123",
  },
  {
    name: "ABC1",
    price: "123",
  },
  {
    name: "ABC2",
    price: "123",
  },
  {
    name: "ABC3",
    price: "123",
  },
  {
    name: "ABC1",
    price: "123",
  },
];

export default function Menu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <div className={classes.searchAndFilter}>
          <SearchBar className={classes.searchBar} />
          <Filter />
        </div>
        <Grid container spacing={3} maxWidth="md">
          {items.map((item, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <PizzaCard
                  className={classes.pizzaCard}
                  name={item.name}
                  price={item.price}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
