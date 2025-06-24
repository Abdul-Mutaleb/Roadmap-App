import React from 'react'
import RoadMapItems from './RoadMapItems';
import { Button, Card,  Container} from 'react-bootstrap';
const Home = () => {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <Card>
          <Card.Body>
            <div className="row">
              <div className= "col-md-8 col-sm-8">
                <h1>Welcome to Roadmap App</h1>
                <p style={{fontSize:'20px'}}>Give Feedback and Share your ideas</p>
              </div>
              <div className="col-md-4 col-sm-4 text-lg-end text-sm-end text-md-end mt-2 px-lg-5 px-md-5">
                <Button variant="success" href='/signup'>Sign Up</Button>
              </div>
            </div>
            <div>
             <RoadMapItems />
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Home
