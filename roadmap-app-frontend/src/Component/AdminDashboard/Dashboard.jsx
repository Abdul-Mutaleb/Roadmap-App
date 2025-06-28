import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalIdeas, setTotalIdeas] = useState(0);

  useEffect(() => {
    axios.get(AppURL.TotalUsers)
      .then((res) => {
        setTotalUsers(res.data.total_users);
      })
      .catch((err) => {
        console.error("Failed to fetch total users", err);
      });
  }, []);
    useEffect(() => {
    axios.get(AppURL.TotalIdeas)
      .then((res) => {
        setTotalIdeas(res.data.total_ideas);
      })
      .catch((err) => {
        console.error("Failed to fetch total ideas", err);
      });
  }, []);

  return (
    <div className="p-4">
      <h3>Dashboard</h3>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Card className="w-100 h-100 bg-info">
            <Card.Body>
              <Card.Title>Total Users</Card.Title>
              <Card.Text>{totalUsers}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        {/* Keep the rest static or fetch dynamically the same way */}
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <Card className="w-100 h-100 bg-success">
            <Card.Body>
              <Card.Title>Total Ideas</Card.Title>
              <Card.Text>{totalIdeas}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
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
