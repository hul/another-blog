import React, { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.css";
import { Navigation } from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
    );
  }
}

export default App;
