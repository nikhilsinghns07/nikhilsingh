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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
