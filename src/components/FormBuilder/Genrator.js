import React from "react";
import { FormBuilder } from "cb-react-forms";
import { Mutation, Query } from "react-apollo";
import { GET_FORM, ADD_FORM_RESPONSE } from "./../../query";
import { Container, Row, Col } from "reactstrap";
import { FormGenerator } from "cb-react-forms";
class Genrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formId: props.match.params.id,
      formData: "",
      formResponseData: "",
      //   formData: [
      //     {
      //       id: "863907e3-81d9-44da-be3b-33bd8f875a69",
      //       element: "Label",
      //       label: {
      //         blocks: [
      //           {
      //             key: "44hi4",
      //             text: "Signup Form ",
      //             type: "unstyled",
      //             depth: 0,
      //             inlineStyleRanges: [],
      //             entityRanges: [],
      //             data: { "text-align": "center" },
      //           },
      //         ],
      //         entityMap: {},
      //       },
      //     },
      //     {
      //       id: "8149d564-cd82-4224-a647-fc19ca755f31",
      //       element: "TextInput",
      //       required: false,
      //       label: {
      //         blocks: [
      //           {
      //             key: "52lcg",
      //             text: "NAME",
      //             type: "unstyled",
      //             depth: 0,
      //             inlineStyleRanges: [],
      //             entityRanges: [],
      //             data: {},
      //           },
      //         ],
      //         entityMap: {},
      //       },
      //       value: "",
      //     },
      //     {
      //       id: "f6a0f600-d991-4103-b6a7-53c24433acd4",
      //       element: "TextInput",
      //       required: false,
      //       label: {
      //         blocks: [
      //           {
      //             key: "bn43m",
      //             text: "Email",
      //             type: "unstyled",
      //             depth: 0,
      //             inlineStyleRanges: [],
      //             entityRanges: [],
      //             data: {},
      //           },
      //         ],
      //         entityMap: {},
      //       },
      //       value: "",
      //     },
      //     {
      //       id: "b0f9c994-e8df-42df-9b55-e67987354536",
      //       element: "RadioButtons",
      //       required: false,
      //       label: {
      //         blocks: [
      //           {
      //             key: "2jhbp",
      //             text: "Gender",
      //             type: "unstyled",
      //             depth: 0,
      //             inlineStyleRanges: [],
      //             entityRanges: [],
      //             data: {},
      //           },
      //         ],
      //         entityMap: {},
      //       },
      //       options: [
      //         {
      //           id: "3fa019c7-f51a-49da-a17c-99e229b9f741",
      //           label: "Male",
      //           value: "male",
      //           checked: false,
      //         },
      //         {
      //           id: "36cba698-29e9-47a5-8da6-eef78fb9a35f",
      //           label: "Female",
      //           value: "female",
      //           checked: false,
      //         },
      //       ],
      //     },
      //     {
      //       id: "85f59a65-263e-4e47-8935-35aa52eb3126",
      //       element: "Dropdown",
      //       label: {
      //         blocks: [
      //           {
      //             key: "dbdj5",
      //             text: "Marital Status",
      //             type: "unstyled",
      //             depth: 0,
      //             inlineStyleRanges: [],
      //             entityRanges: [],
      //             data: {},
      //           },
      //         ],
      //         entityMap: {},
      //       },
      //       required: false,
      //       options: [
      //         { id: "0704fdee-321f-4ecf-8900-c1bc2ea409d0", value: "Married" },
      //         { id: "d8f6af79-6401-4c60-9b5f-a15be7e91a6d", value: "unMarried" },
      //       ],
      //     },
      //   ],
    };
  }

  submitHandeler = (formResponseData, addFormResponse) => {
    console.log("submit handeler", formResponseData);
    addFormResponse({
      variables: { formResponseData, formId: this.state.formId },
    }).then((data) => {
      console.log("createForm", data);
    });
  };
  render() {
    const { formResponseData, formData, formId } = this.state;
    console.log("formId", formId);
    return (
      <Query query={GET_FORM} variables={{ id: formId }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading ....</p>;
          if (error) return <p>Error ....</p>;
          console.log("get form data", data);
          const { getForm } = data;
          return (
            <Mutation
              mutation={ADD_FORM_RESPONSE}
              variables={{ formResponseData, formId }}
            >
              {(addFormResponse, { data, loading, error }) => {
                return (
                  <FormGenerator
                    formData={JSON.parse(getForm.formData)}
                    onSubmit={(responseData) => {
                      this.submitHandeler(responseData, addFormResponse);
                    }}
                  />
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
    // return (
    //   <FormGenerator
    //     formData={formData}
    //     onSubmit={(responseData) => {
    //       this.submitHandeler(responseData);
    //     }}
    //   />
    // );
  }
}

export default Genrator;
