
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs';
import Login from './components/Login';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
    <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/blogs' element={<Blogs />}/>
    </Routes>
    
    
    </BrowserRouter>
     
    </div>
  );
}

export default App;
