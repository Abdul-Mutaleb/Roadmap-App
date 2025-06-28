import React, { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../api/AppURL';
const Manageideas = () => {
  
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);

    useEffect(() => {
      getIdeas();
    }, []);

    const getIdeas = () => {
    axios.get(AppURL.IdeasList)
      .then((res) => {
        setIdeas(res.data);
      })
      .catch((err) => {
        console.log("Error fetching ideas", err);
      });
  };

  //delete idea function
  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this idea?")) {
      axios.delete(`${AppURL.BaseURL}/admin/delete-idea/${id}`)
        .then(() => {
          getIdeas(); 
        })
        .catch((err) => {
          console.log("Delete error", err);
        });
    }
  };



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
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ideas.length > 0 ? (
                      ideas.map((idea, index) => (
                        <tr key={idea.id}>
                          <td>{index + 1}</td>
                          <td>{idea.title}</td>
                          <td>{idea.description}</td>
                          <td>
                            <Button size="sm" variant="warning" onClick={() => navigate(`/admin/edit-idea/${idea.id}`)}>
                                Edit
                            </Button>
                           <Button  className="mt-sm-1 mt-md-0 " style={{ marginLeft: "10px" }} size="sm" variant="danger" onClick={() => handleDelete(idea.id)}>Delete</Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5">No ideas found.</td>
                      </tr>
                    )}
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
