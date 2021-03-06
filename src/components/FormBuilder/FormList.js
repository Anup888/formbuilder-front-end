import React from "react";
import { Table, Row, Col, Button } from "reactstrap";
import moment from "moment";
const FormListing = (props) => {
  return (
    <Row>
      <Col>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Created At</th>
              <th>id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props &&
              props.formData &&
              props.formData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">1</th>
                    <td>{moment(item.createdDate).format()}</td>
                    <td>{item._id}</td>
                    <td>
                      <span>
                        <a href={`/view-form/${item._id}`}>
                          <Button outline color="primary">
                            View Form
                          </Button>
                        </a>
                      </span>

                      <span>
                        <a href={`/view-responses/${item._id}`}>
                          <Button outline color="primary">
                            View Responses
                          </Button>
                        </a>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default FormListing;
