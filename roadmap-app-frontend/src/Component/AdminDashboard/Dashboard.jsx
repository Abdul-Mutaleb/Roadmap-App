import { Card } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Card className="w-100 h-100 bg-info">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>120</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
          <Card className="w-100 h-100 bg-success">
            <Card.Body>
              <Card.Title>Total Ideas</Card.Title>
              <Card.Text>150</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
          <Card className="w-100 h-100 bg-warning">
            <Card.Body>
              <Card.Title>Total Comments</Card.Title>
              <Card.Text>20</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
