import React from 'react'
import { Card } from 'react-bootstrap'
const Details = () => {
  return (
    <div className="container  justify-content-center align-items-center mt-5">
      <Card className='mt-5'>
        <Card.Body className="shadow border-0">
            <Card.Title className=''>
            <h1>Roadmap Details</h1>
            <p className="text-muted">Here you can find the details of the roadmap</p>
            <div>
                <textarea name="" id="" placeholder="Write your comments..." className="form-control" rows="10"></textarea>
                <button className='btn btn-primary mt-2'>Comment</button>
            </div>

            </Card.Title>   
        </Card.Body>
      </Card>
    </div>
  )
}

export default Details
