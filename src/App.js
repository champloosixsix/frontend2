import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar 
        drawerWidth={220}
        content= {      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/about" element={<About/>} />
          </Routes>}/>

    </div>
  );
}

export default App;
