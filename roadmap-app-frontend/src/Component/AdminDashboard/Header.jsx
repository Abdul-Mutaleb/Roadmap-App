import { Navbar, Nav, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="light" className="px-4 d-flex justify-content-between">
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
            <Dropdown.Item href="/login">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default Header;
