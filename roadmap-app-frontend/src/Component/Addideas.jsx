import React from 'react';
import { Card, Button, Container, Form } from 'react-bootstrap';

const Addideas = () => {
    return (
        <Container className="mt-5 d-flex flex-column align-items-center justify-content-center">
            <Card className="w-100 shadow" style={{ maxWidth: '600px' }}>
                <Card.Body>
                    <div className="bg-dark text-white text-center p-3 mb-4 rounded">
                        <h2 className="mb-0" style={{ fontWeight: '600', letterSpacing: '1px' }}>
                            Add Your Ideas
                        </h2>
                    </div>
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold">
                                Title <span className="text-danger">*</span>
                            </label>
                            <input type="text" id="title" placeholder="Enter your title" className="form-control"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="form-label fw-bold">
                                Description <span className="text-danger">*</span>
                            </label>
                            <textarea id="description" rows="10" placeholder="Enter your description" className="form-control"
                            ></textarea>
                        </div>
                        <div className="d-grid">
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Addideas;
