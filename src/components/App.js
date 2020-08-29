import React from "react";
import "./App.css";
import { Query } from "react-apollo";
import { GET_ALL_FORMS } from "./../query";
// import Builder from "./FormBuilder/Builder";
import { Button, Container } from "reactstrap";
import FormListing from "./FormBuilder/FormList";
const App = () => (
  <div className="App">
    <Container>
      <h1>Form List</h1>
      {/* <Builder /> */}

      <Query query={GET_ALL_FORMS}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading ....</p>;
          if (error) return <p>Error ....</p>;
          console.log("get recipes data", data);
          return <FormListing formData={data.getAllForms} />;
        }}
      </Query>
      <a href="/addForm">
        <Button outline color="primary">
          <span>Create Form</span>
        </Button>
      </a>
    </Container>
  </div>
);

export default App;
