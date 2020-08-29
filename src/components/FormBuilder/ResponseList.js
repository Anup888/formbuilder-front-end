import React from "react";
import { Table, Row, Col, Button } from "reactstrap";
import moment from "moment";
const ResponseListing = (props) => {
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
                        <a href={`/view-response-details/${item._id}`}>
                          <Button outline color="primary">
                            View Responses Details
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

export default ResponseListing;
