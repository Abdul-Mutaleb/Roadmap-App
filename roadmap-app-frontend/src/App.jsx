import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate, } from 'react-router-dom';
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
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    axios.get(AppURL.IdeasList)
      .then(response => setIdeas(response.data))
      .catch(error => console.error("Error fetching ideas:", error));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    } else {
      setUser(null);
      setToken(null);
    }
  }, [token]);

  const handleLogout = async () => {
    try {
      await axios.post(AppURL.Logout, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Logout failed:', error);
    }

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);

    // 🔁 Immediately reload the app to ensure clean state
    window.location.href = '/login';
  };

  const isAdmin = user?.role === 'admin';
  const isUser = user?.role === 'user';

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comments' element={<Comments />} />
      <Route path='/details' element={<Details />} />

      <Route
        path='/register'
        element={token ? <Navigate to={isAdmin ? "/admin" : "/navbar"} /> : <Register user={user} setUser={setUser} />}
      />
      <Route
        path='/login' element={token ? <Navigate to={isAdmin ? "/admin" : "/navbar"} /> : <Login user={user} setUser={setUser} setToken={setToken} />} />

      <Route
        path='/navbar' element={token && isUser ? <Navigationbar handleLogout={handleLogout} /> : <Navigate to="/login" />} />
      <Route
        path='/admin' element={token && isAdmin ? <Adminlayout handleLogout={handleLogout} /> : <Navigate to="/login" />}>
        <Route index element={<Dashboard />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='add-ideas' element={<Addideas ideas={ideas} setIdeas={setIdeas} />} />
        <Route path='manage-ideas' element={<Manageideas />} />
        <Route path='edit-idea/:id' element={<EditIdeas />} />
      </Route>

      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
