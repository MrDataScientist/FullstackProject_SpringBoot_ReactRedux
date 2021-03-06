import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Landing from "./components/Layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/Layout/NotFound";
import Dashboard from "./components/CapacityTool/Dashboard";
import AddCapacity from "./components/CapacityTool/AddCapacity";
import UpdateCapacity from "./components/CapacityTool/UpdateCapacity";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              {
                //The <Switch> will iterate over its children elements (the routes) and only render the first one that matches the current pathname.
                /*
              if you dont put switch, it will all render together inclusively
              */
              }
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/addCapacity" component={AddCapacity} />
                <Route
                  exact
                  path="/updateCapacity"
                  component={UpdateCapacity}
                />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
