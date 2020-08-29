import React from "react";
import { FormBuilder } from "cb-react-forms";
import { Mutation } from "react-apollo";
import { CREATE_FORM } from "./../../query";
const toolbarItems = [
  {
    key: "Label",
    name: "Header Text",
    // icon: "fa fa-header",
  },
  {
    key: "TextInput",
    name: "Text Input Field",
    // icon: "fa fa-input",
  },
  {
    key: "RadioButtons",
    name: "Radio Button",
    // icon: "fa fa-radio",
  },
  {
    key: "Dropdown",
    name: "Dropdown",
    // icon: "fa fa-caret-square-o-down",
  },
];

class Builder extends React.Component {
  state = {
    formData: "",
  };

  handleSubmit = (formData, createForm) => {
    console.log("handlesubmit", formData);
    // event.preventDefault();
    createForm({ variables: { formData } }).then((data) => {
      console.log("createForm", data);
    });
  };
  render() {
    const { formData } = this.state;
    console.log("from render", formData);
    return (
      <Mutation mutation={CREATE_FORM} variables={{ formData }}>
        {(createForm, { data, loading, error }) => {
          return (
            <FormBuilder
              onSubmit={(formData) => {
                console.log("onsubmit", formData);
                this.setState({ formData });
                // createForm({ variables: { formData } });
                this.handleSubmit(formData, createForm);
              }} // function
              items={toolbarItems} // array of toolbar items
            />
          );
        }}
      </Mutation>
    );
  }
}

export default Builder;
