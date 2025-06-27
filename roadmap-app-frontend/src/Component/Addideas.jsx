import React from 'react';
import { Card, Button, Container, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../api/AppURL';

class Addideas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            errors: [],
            success: '',
        };
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.setState({ errors: [], success: '' });

        const data = {
            title: this.state.title,
            description: this.state.description
        };

        axios.post(AppURL.Addideas, data)
            .then((response) => {
                if (this.props.setIdeas) {
                    this.props.setIdeas(prev => [...prev, response.data.idea]);
                }
                this.setState({
                    title: '',
                    description: '',
                    success: response.data.message,
                    errors: [],
                });
            })
    };

    render() {
        return (
            <Container className="mt-5 d-flex flex-column align-items-center justify-content-center">
                <Card className="w-100 shadow" style={{ maxWidth: '600px' }}>
                    <Card.Body>
                        <div className="bg-dark text-white text-center p-3 mb-4 rounded">
                            <h2 className="mb-0" style={{ fontWeight: '600', letterSpacing: '1px' }}>
                                Add Your Ideas
                            </h2>
                        </div>

                        {this.state.success && (
                            <Alert variant="success">{this.state.success}</Alert>
                        )}

                        {this.state.errors.length > 0 && (
                            <Alert variant="danger">
                                {this.state.errors.map((error, i) => (
                                    <div key={i}>{error}</div>
                                ))}
                            </Alert>
                        )}

                        <Form onSubmit={this.formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label fw-bold">
                                    Title <span className="text-danger">*</span>
                                </label>
                                <input type="text" id="title" className="form-control" placeholder="Enter your title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="form-label fw-bold">
                                    Description <span className="text-danger">*</span>
                                </label>
                                <textarea id="description" rows="6" className="form-control" placeholder="Enter your description" value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })}
                                    required
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
    }
}

export default Addideas;
