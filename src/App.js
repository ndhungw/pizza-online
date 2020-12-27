import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Cart from './pages/Cart';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import PizzaCard from "./components/CustomPizzaCard/PizzaCard";
import SearchBar from "./components/SearchBar/SearchBar";

// views
import Menu from "./pages/Menu";
import PizzaDetail from "./pages/PizzaDetail";
import HomePage from './pages/HomePage'
import Header from './components/Header';

// Footer
import Footer from './components/Footer/Footer'

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },  
  footer: {
    backgroundColor: theme.palette.background.paper,
    position: "relative"
  },
}));


function App() {
  const classes = useStyles();

  return (
    <>
      {/* App bar */}

      <Router>
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Pizza Company
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* The page content here */}
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
        {/* Footer */}
        <footer className={classes.footer}>
          <Footer />
        </footer>
        {/* End footer */}
      </React.Fragment>
        
      </Router>
    </>
  );
}

export default App;
