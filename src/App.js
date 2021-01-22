import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// views
import Menu from "./pages/Menu";
import PizzaDetail from "./pages/PizzaDetail";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import MakePizza from "./pages/makePizza";
import Payment from "./pages/Payment";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(7),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
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
        <main className={classes.main}>
          {/* The page content here */}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
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
            <Route path="/payment">
              <Payment />
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
