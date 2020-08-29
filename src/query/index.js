import { gql } from "apollo-boost";

export const GET_ALL_FORMS = gql`
  query {
    getAllForms {
      formData
      createdDate
      _id
    }
  }
`;

export const GET_FORM = gql`
  query($id: ID) {
    getForm(id: $id) {
      formData
      createdDate
      _id
    }
  }
`;

export const GET_ALL_FORM_RESPONSES = gql`
  query($formId: ID) {
    getAllFormResponses(formId: $formId) {
      _id
      formData {
        _id
        formData
        createdDate
      }
      createdDate
      formResponseData
      formId
    }
  }
`;

export const GET_FORM_RESPONSE = gql`
  query($id: ID) {
    getFormResponse(id: $id) {
      _id
      formData {
        _id
        formData
        createdDate
      }
      createdDate
      formResponseData
      formId
    }
  }
`;

export const CREATE_FORM = gql`
  mutation($formData: String!) {
    createForm(formData: $formData) {
      _id
      formData
    }
  }
`;

export const ADD_FORM_RESPONSE = gql`
  mutation($formResponseData: String, $formId: ID) {
    addFormResponse(formResponseData: $formResponseData, formId: $formId) {
      _id
      formData {
        _id
        formData
        createdDate
      }
      createdDate
      formResponseData
      formId
    }
  }
`;
