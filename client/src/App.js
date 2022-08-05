
import './App.css';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Download from './pages/Download'
import Projects from './pages/Projects'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/download' element={<Download/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
