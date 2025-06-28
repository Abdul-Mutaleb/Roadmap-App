import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { HandThumbsUp, ChatDots } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppURL from '../api/AppURL';

const RoadMapItems = () => {
  const navigate = useNavigate();
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    axios.get(AppURL.IdeasList)
      .then((response) => {
        setIdeas(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch ideas", error);
      });
  }, []);

  const CardDetails = () => {
    navigate('/register');
  };

  const handleComment = (e) => {
    e.stopPropagation();
    navigate('/register');
  };

  const renderCards = () => {
    const cards = [];
    let i = 0;
    while (i < ideas.length) {
      const idea = ideas[i];
      cards.push(
        <div key={idea.id} className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card className='mt-3' style={{ cursor: 'pointer' }} onClick={CardDetails}>
            <Card.Body className="shadow border-0">
              <Card.Title>
                <h2>{idea.title}</h2>
                <p className="text-muted">{idea.description}</p>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='gap-1 d-flex justify-content-start align-items-center'>
                    <HandThumbsUp />
                    <span className='px-2 text-secondary'>Like (20)</span>
                  </div>
                  <div
                    className='gap-1 d-flex px-3 justify-content-start align-items-center'
                    onClick={handleComment}
                    style={{ cursor: 'pointer' }}
                  >
                    <ChatDots />
                    <span className='px-2 text-secondary'>View Comment (5)</span>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
      i++;
    }
    return cards;
  };

  return (
    <div className='container'>
      <div className='row mt-3'>
        {renderCards()}
      </div>
    </div>
  );
};

export default RoadMapItems;
