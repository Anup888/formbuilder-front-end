import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_FORM_RESPONSES } from "./../../query";
// import Builder from "./FormBuilder/Builder";
import { Button, Container } from "reactstrap";
import ResponseListing from "./ResponseList";

class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formId: props.match.params.formId,
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <h1>Response List</h1>
          {/* <Builder /> */}

          <Query
            query={GET_ALL_FORM_RESPONSES}
            variables={{ formId: this.state.formId }}
          >
            {({ data, loading, error }) => {
              if (loading) return <p>Loading ....</p>;
              if (error) return <p>Error ....</p>;
              console.log("get recipes data", data);
              return <ResponseListing formData={data.getAllFormResponses} />;
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
  }
}

export default Response;
