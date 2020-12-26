import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Filter from "./components/Menu/Filter";
import PizzaCard from "./components/Menu/PizzaCard";
import SearchBar from "./components/Menu/SearchBar";
import Menu from "./pages/Menu";

function App() {
  return (
    <>
      {/* App bar */}

      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>

          {/* Test components */}
          <Route path="/components/searchBar">
            <SearchBar />
          </Route>
          <Route path="/components/filter">
            <Filter />
          </Route>
          <Route path="/components/pizzaCard">
            <PizzaCard />
          </Route>
        </Switch>
      </Router>

      {/* Footer */}
    </>
  );
}

export default App;
