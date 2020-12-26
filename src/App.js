import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import PizzaCard from "./components/CustomPizzaCard/PizzaCard";
import SearchBar from "./components/SearchBar/SearchBar";

// views
import Menu from "./pages/Menu";
import PizzaDetail from "./pages/PizzaDetail";

function App() {
  return (
    <>
      {/* App bar */}

      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/pizza-detail">
            <PizzaDetail />
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
      </Router>

      {/* Footer */}
    </>
  );
}

export default App;
