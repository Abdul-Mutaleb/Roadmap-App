import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

import Home from './Component/Home';
import Comments from './Component/Comments';
import Details from './Component/Details';
import Navigationbar from './Component/Navigationbar';
import Login from './Component/Login';
import Register from './Component/Register';
import Dashboard from './Component/AdminDashboard/Dashboard';
import Adminlayout from './Component/AdminDashboard/Adminlayout';
import Addideas from './Component/Addideas';
import EditIdeas from './Component/EditIdeas';
import Manageideas from './Component/Manageideas';
import AppURL from './api/AppURL';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(AppURL.IdeasList)
      .then((response) => {
        setIdeas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ideas:", error);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comments' element={<Comments />} />
      <Route path='/details' element={<Details />} />
      <Route path='/register' element={<Register user={user} setUser={setUser} />} />
      <Route path='/login' element={<Login user={user} setUser={setUser} />} />

      {/* Protected User Route */}
      <Route path='/navbar' element={token ? <Navigationbar /> : <Navigate to="/login" />} />

      {/* Protected Admin Routes */}
      <Route path='/admin' element={token ? <Adminlayout /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='add-ideas' element={<Addideas ideas={ideas} setIdeas={setIdeas} />} />
        <Route path='manage-ideas' element={<Manageideas />} />
        <Route path='edit-idea/:id' element={<EditIdeas />} />
      </Route>

      {/* 404 Fallback */}
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
