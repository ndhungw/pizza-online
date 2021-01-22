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
