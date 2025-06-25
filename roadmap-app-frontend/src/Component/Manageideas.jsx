import React from 'react';
import { Card, Table } from 'react-bootstrap';

const Manageideas = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-10 col-lg-9 col-xl-8">
          <Card className="border-0 shadow rounded-4">
            <Card.Header className="bg-dark text-white text-center rounded-top-4">
              <h4 className="fw-bold mb-0">Manage Idea List</h4>
            </Card.Header>
            <Card.Body className="px-4 py-4">
              <div className="table-responsive">
                <Table bordered className="text-center align-middle mb-0"
                >
                  <thead className="table-dark">
                    <tr>
                      <th>Serial</th>
                      <th>Title</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Manageideas;
