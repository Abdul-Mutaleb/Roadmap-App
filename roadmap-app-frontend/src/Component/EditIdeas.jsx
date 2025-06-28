import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AppURL from '../api/AppURL';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';

const EditIdeas = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    axios.get(`${AppURL.IdeasList}`)
      .then((res) => {
        const idea = res.data.find((item) => item.id === parseInt(id));
        if (idea) {
          setTitle(idea.title);
          setDescription(idea.description);
        } else {
          alert("Idea not found!");
          navigate('/admin/manage-ideas');
        }
      })
      .catch((err) => {
        console.log("Fetch error", err);
      });
  }, [id, navigate]);

  // Submit updated idea
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${AppURL.UpdateIdeas}/${id}`, {
      title: title,
      description: description
    })
      .then(() => {
        setSuccessMessage("Idea updated successfully");
        setTimeout(() => {
          navigate('/admin/manage-ideas');
        }, 1500);
      })
      .catch((err) => {
        console.log("Update error", err);
        alert("Update failed!");
      });
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-10 col-lg-9 col-xl-8">
          <Card className="border-0 shadow rounded-4">
            <Card.Header className="bg-dark text-white text-center rounded-top-4">
              <h4 className="fw-bold mb-0">Edit Idea</h4>
            </Card.Header>
            <Card.Body className="px-4 py-4">
              
              {/* Success Message */}
              {successMessage && (
                <div className="alert alert-success text-center" role="alert">
                  {successMessage}
                </div>
              )}

              {/* Edit Form */}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Idea Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Idea Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className="text-end">
                  <Button variant="success" type="submit">Save Changes</Button>{' '}
                  <Button variant="secondary" onClick={() => navigate('/admin/manage-ideas')}>Cancel</Button>
                </div>
              </Form>

            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EditIdeas;
