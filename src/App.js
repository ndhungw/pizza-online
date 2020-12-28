import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Filter from "./components/Filter/Filter";
import PizzaCard from "./components/CustomPizzaCard/PizzaCard";
import SearchBar from "./components/SearchBar/SearchBar";
// views
import Menu from "./pages/Menu";
import PizzaDetail from "./pages/PizzaDetail";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import MakePizza from "./pages/makePizza";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "auto",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <div className={classes.root}>
        <Header />
        <main>
          {/* The page content here */}
          <Route exact path="/">
            <HomePage />
          </Route>
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/pizza-detail">
              <PizzaDetail />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/make-pizza">
              <MakePizza />
            </Route>

            {/* Test components */}
            <Route path="/components/search-bar">
              <SearchBar />
            </Route>
            <Route path="/components/filter">
              <Filter />
            </Route>
            <Route path="/components/pizza-card">
              <PizzaCard />
            </Route>
          </Switch>
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
