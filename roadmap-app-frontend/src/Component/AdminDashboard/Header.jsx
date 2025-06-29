import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
const Header = () => {
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



  return (
    <Navbar bg="light" className="px-4 d-flex justify-content-between fixed-top">
      <Navbar.Brand>Welcome, Admin</Navbar.Brand>

      <Nav>
        <Dropdown align="end">
          <Dropdown.Toggle variant="light" id="dropdown-profile" className="d-flex align-items-center">
            <span>Admin</span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
