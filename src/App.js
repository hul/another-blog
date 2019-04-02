import React, { Component } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import PostsListContainer from "./containers/PostsListContainer";
import { NotFound } from "./components/NotFound";
import PostContainer from "./containers/PostContainer";
import PostFormContainer from "./containers/PostFormContainer";
import "./icons";

const NewPost = props => <PostFormContainer {...props} />;
const EditPost = props => <PostFormContainer {...props} />;

const PostsPage = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/new`} component={NewPost} />
    <Route path={`${match.url}/:id/edit`} component={EditPost} />
    <Route path={`${match.url}/:id`} component={PostContainer} />
    <Route path={`${match.url}/`} component={PostsListContainer} />
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
            <Route path="/posts" component={PostsPage} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
