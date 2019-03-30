import React, { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import PostsListContainer from "./containers/PostsListContainer";
import PostContainer from "./containers/PostContainer";
import PostFormContainer from "./containers/PostFormContainer";

const Posts = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/new`} component={PostFormContainer} />
    <Route path={`${match.url}/:id/edit`} component={PostFormContainer} />
    <Route path={`${match.url}/:id`} component={PostContainer} />
    <Route path={`${match.url}`} component={PostsListContainer} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
