import React from 'react'
import { Card } from 'react-bootstrap'
import { HandThumbsUp, ChatDots } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

const RoadMapItems = () => {
  const navigate = useNavigate();

  const CardDetails = () => {
    navigate('/details');
  };
  const handleComment = (e) => {
    e.stopPropagation();
    navigate('/comments');
  };
  return (
    <div className='container'>

      <div className='row mt-3'>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card className='mt-3' style={{ cursor: 'pointer' }} onClick={CardDetails}>
            <Card.Body className="shadow border-0" >
              <Card.Title>
                <h2 >Dark Mode</h2>
                <p className="text-muted">Toggle between light and dark themes</p>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='gap-1 d-flex justify-content-start align-items-center'>
                    <HandThumbsUp />
                    <span className='px-2  text-secondary'>Like (20)</span>
                  </div>
                  <div className='gap-1 d-flex px-3 justify-content-start align-items-center' onClick={handleComment} style={{ cursor: 'pointer' }}>
                    <ChatDots />
                    <span className='px-2 text-secondary'> View Comment (5)</span>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card className='mt-3' style={{ cursor: 'pointer' }} onClick={CardDetails}>
            <Card.Body className="shadow border-0" >
              <Card.Title>
                <h2 >Dark Mode</h2>
                <p className="text-muted">Toggle between light and dark themes</p>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='gap-1 d-flex justify-content-start align-items-center'>
                    <HandThumbsUp />
                    <span className='px-2  text-secondary'>Like (20)</span>
                  </div>
                  <div className='gap-1 d-flex px-3 justify-content-start align-items-center' onClick={handleComment} style={{ cursor: 'pointer' }}>
                    <ChatDots />
                    <span className='px-2 text-secondary'> View Comment (5)</span>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card className='mt-3' style={{ cursor: 'pointer' }} onClick={CardDetails}>
            <Card.Body className="shadow border-0" >
              <Card.Title>
                <h2 >Dark Mode</h2>
                <p className="text-muted">Toggle between light and dark themes</p>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='gap-1 d-flex justify-content-start align-items-center'>
                    <HandThumbsUp />
                    <span className='px-2  text-secondary'>Like (20)</span>
                  </div>
                  <div className='gap-1 d-flex px-3 justify-content-start align-items-center' onClick={handleComment} style={{ cursor: 'pointer' }}>
                    <ChatDots />
                    <span className='px-2 text-secondary'> View Comment (5)</span>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4'>
          <Card className='mt-3' style={{ cursor: 'pointer' }} onClick={CardDetails}>
            <Card.Body className="shadow border-0" >
              <Card.Title>
                <h2 >Dark Mode</h2>
                <p className="text-muted">Toggle between light and dark themes</p>
                <div className='d-flex justify-content-start align-items-center'>
                  <div className='gap-1 d-flex justify-content-start align-items-center'>
                    <HandThumbsUp />
                    <span className='px-2  text-secondary'>Like (20)</span>
                  </div>
                  <div className='gap-1 d-flex px-3 justify-content-start align-items-center' onClick={handleComment} style={{ cursor: 'pointer' }}>
                    <ChatDots />
                    <span className='px-2 text-secondary'> View Comment (5)</span>
                  </div>
                </div>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>

    </div>
  )
}

export default RoadMapItems
