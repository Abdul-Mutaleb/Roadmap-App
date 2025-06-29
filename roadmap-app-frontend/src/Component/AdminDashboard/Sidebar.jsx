import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaTachometerAlt, FaLightbulb, FaEdit, FaComments } from 'react-icons/fa';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <div
      className={`bg-dark text-white p-3 ${collapsed ? 'vh-100' : 'vh-100'}`}
      style={{ width: collapsed ? '70px' : '220px', transition: 'width 0.3s' }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3 gap-2">
        <h4 className="text-center" style={{ display: collapsed ? 'none' : 'block' }}>Admin Panel</h4>
        <FaBars onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
      </div>

      <Nav defaultActiveKey="/" className="flex-column mt-4 gap-4">
        <Nav.Link as={Link} to="/admin/dashboard" className="text-white d-flex align-items-center gap-2">
          <FaTachometerAlt /> {!collapsed && 'Dashboard'}
        </Nav.Link>
        <Nav.Link as={Link} to="/admin/add-ideas" className="text-white d-flex align-items-center gap-2">
          <FaLightbulb /> {!collapsed && 'Add Ideas'}

        </Nav.Link>
        <Nav.Link as={Link} to="/admin/manage-ideas" className="text-white d-flex align-items-center gap-2">
          <FaEdit /> {!collapsed && 'Manage Ideas'}
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
