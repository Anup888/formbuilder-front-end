import React from "react";
import { Query } from "react-apollo";
import { GET_FORM_RESPONSE } from "./../../query";
import { FormGenerator } from "cb-react-forms";

class ResponseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseId: props.match.params.id,
    };
  }
  //   submitHandeler = (formResponseData, getFormResponse) => {
  //     console.log("submit handeler", formResponseData);
  //     getFormResponse({
  //       variables: { id: this.state.responseId },
  //     }).then((data) => {
  //       console.log("createForm", data);
  //     });
  //   };
  render() {
    return (
      <Query
        query={GET_FORM_RESPONSE}
        variables={{ id: this.state.responseId }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>Loading ....</p>;
          if (error) return <p>Error ....</p>;
          console.log("get form data", data);
          const { getFormResponse } = data;
          return (
            <FormGenerator
              formData={JSON.parse(getFormResponse.formData.formData)}
              //   onSubmit={() => {
              //     this.submitHandeler(getFormResponse);
              //   }}
              responseData={JSON.parse(getFormResponse.formResponseData)}
              readOnly={true}
            />
          );
        }}
      </Query>
    );
  }
}

export default ResponseDetails;
