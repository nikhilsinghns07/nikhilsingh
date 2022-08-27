import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from './pages/Home'
import Download from './pages/Download'
import Projects from './pages/Projects'
import Blog from './BLOG/pages/Blog'
import Login from "./BLOG/pages/Login";
import Signup from "./BLOG/pages/SignUp";
import CreatePost from './BLOG/pages/CreatePost'
import EditPost from './BLOG/pages/EditPost'
import UserPost from './BLOG/pages/UserPost'
import ForgotPassword from "./BLOG/pages/ForgotPassword";
import ResetPassword from "./BLOG/pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/blog'element={<Blog/>} />
        <Route path = '/login' element={<Login />} />
        <Route path = '/signup' element={<Signup />} />
        <Route path = '/createPost' element={<CreatePost />} />
        <Route path = '/editPost' element={<EditPost />} />
        <Route path = '/userPost' element={<UserPost />} />
        <Route path = "/resetPassword" element = {<ForgotPassword/>} />
        <Route path = '/newPassword/:token/:id' element = {<ResetPassword/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// https://nikhilsingh07.herokuapp.com/newPassword/token=1d7fa2ee59bdca41b1bd04c8720378156b97678fb0b44c5ba45cfb3c50c9fcc9&id=63047aa9be0d629eb4123fc6 
// https://nikhilsingh07.herokuapp.com/newPassword/token=21b804107cb6fcc6aed44ae0ba8f1fad2ef1759c245a5f94c9cfc4f5b292d756/id=63047aa9be0d629eb4123fc6