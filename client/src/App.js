import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Download from './pages/Download'
import Projects from './pages/Projects'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/projects' element={<Projects />}/>
      </Routes> 
      <Routes>
        <Route path='/download' element={<Download/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
