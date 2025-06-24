import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Comments from './Component/Comments';
import Details from './Component/Details';
import Navigationbar from './Component/Navigationbar';
import Signup from './Component/SignUp';
import Login from './Component/Login';


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
        <Route path='*' element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  )
}
export default App


