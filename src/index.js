import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./components/App";
import Builder from "./components/FormBuilder/Builder";
import Genrator from "./components/FormBuilder/Genrator";
import Response from "./components/FormBuilder/Response";
import ResponseDetails from "./components/FormBuilder/ResponseDetails";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4444/graphql",
});
const Root = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/addForm" component={Builder} />
      <Route path="/view-form/:id" component={Genrator} />
      <Route path="/view-responses/:formId" component={Response} />
      <Route path="/view-response-details/:id" component={ResponseDetails} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
  </ApolloProvider>,
  document.getElementById("root")
);
