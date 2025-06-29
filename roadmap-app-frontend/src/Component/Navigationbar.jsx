import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppURL from '../api/AppURL';
import axios from 'axios';
import { HandThumbsUp, ChatDots } from 'react-bootstrap-icons';
import Comments from './Comments';

const Navigationbar = () => {
  const [ideas, setIdeas] = useState([]);
  const [activeCommentId, setActiveCommentId] = useState(null);

  const handleLogout = async () => {
    try {
      await axios.post(AppURL.Logout, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } catch (error) {
      console.error("Logout failed", error);
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');

    
    window.location.href = '/login';
  };


  useEffect(() => {
    axios.get(AppURL.IdeasList)
      .then((response) => {
        setIdeas(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch ideas", error);
      });
  }, []);

  const handleComment = (id, e) => {
    e.stopPropagation();
    setActiveCommentId(prev => (prev === id ? null : id)); 
  }

   const handleLike = (id, e) => {
    e.stopPropagation();

    axios.post(AppURL.PostVote, { idea_id: id }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(() => {
      // Refetch updated like count
      axios.get(AppURL.IdeasList)
        .then((response) => setIdeas(response.data))
        .catch((err) => console.error("Failed to refetch ideas", err));
    })
    .catch((err) => {
      console.error("Vote failed", err);
    });
  };


  const renderCards = () => {
    return ideas.map((idea) => (
      <div key={idea.id} className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
        <Card className='mt-3'>
          <Card.Body className="shadow border-0">
            <Card.Title>
              <h2>{idea.title}</h2>
              <p className="text-muted">{idea.description}</p>
              <div className='d-flex justify-content-start align-items-center'>
                <div
                  className='gap-1 d-flex justify-content-start align-items-center'
                  onClick={(e) => handleLike(idea.id, e)}
                  style={{ cursor: 'pointer' }}
                >
                  <HandThumbsUp />
                  <span className='px-2 text-secondary'>Like ({idea.likes_count || 0})</span>
                </div>
                <div
                    className='gap-1 d-flex px-3 justify-content-start align-items-center'
                    onClick={(e) => handleComment(idea.id, e)}
                    style={{ cursor: 'pointer' }}
                  >
                  <ChatDots />
                  <span className='px-2 text-secondary'>Comment ({idea.comments_count || 0})</span>

                </div>
              </div>
            </Card.Title>
              {activeCommentId === idea.id && (
                <Comments ideaId={idea.id} />
              )}
          </Card.Body>
        </Card>
      </div>
    ));
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand href="/">Roadmap App</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5 pt-5">
        <div>
          <h1>Welcome to RoadMap App</h1>
        </div>
        <div className="row">
          {renderCards()}
        </div>
      </Container>
    </div>
  );
};

export default Navigationbar;
