import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Comments from './Component/Comments';
import Details from './Component/Details';
import Navigationbar from './Component/Navigationbar';
import Signup from './Component/SignUp';
import Login from './Component/Login';
import Dashboard from './Component/AdminDashboard/Dashboard';
import Adminlayout from './Component/AdminDashboard/Adminlayout';
import Addideas from './Component/Addideas';
import Manageideas from './Component/Manageideas';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/details' element={<Details />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/navbar' element={<Navigationbar />} />
        <Route path='/admin' element={<Adminlayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-ideas" element={<Addideas />} />
          <Route path="manage-ideas" element={<Manageideas />} />
        </Route>


        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}
export default App


