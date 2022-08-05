import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import Home from './pages/Home'
import Download from './pages/Download'
import Projects from './pages/Projects'
import Blog from './BLOG/pages/Blog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/blog'element={<Blog/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
