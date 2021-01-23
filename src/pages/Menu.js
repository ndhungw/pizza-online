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
    margin: theme.spacing(4, 0, 4, 0),
  },
}));

const items = [
  {
    name: "Pizza hải sản sốt bơ",
    price: "123",
  },
  {
    name: "Pizza kim chi thịt ba rọi",
    price: "132",
  },
  {
    name: "Pizza thơm Hawaiian",
    price: "120",
  },
  {
    name: "Pizza xúc xích",
    price: "130",
  },
  {
    name: "Pizza phô mai Deluxe",
    price: "120",
  },
  {
    name: "Pizza BBQ",
    price: "135",
  },
  {
    name: "Pizza khoai lang",
    price: "135",
  },
  {
    name: "Pizza nấm chay",
    price: "125",
  },
];

export default function Menu() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SearchBar className={classes.searchBar} />
        </Grid>
        <Grid item xs={12}>
          <Filter />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {items.map((item, index) => {
          return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              container
              justify="center"
            >
              <PizzaCard name={item.name} price={item.price} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
