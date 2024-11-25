import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Signup from './components/Signup';
import Login from './components/Login';
import Premiumvideo from './components/Premiumvideo';


function App() {
  return (
    <Router>
      <Header/>
      <Routes >
        <Route path='/' element={< Home/>}/>
        <Route path='/videos' element={< Videos/>}/>
        <Route path='/upload' element={< Upload/>}/>
        <Route path='/login' element={< Login/>}/>
        <Route path='/signup' element={< Signup/>}/>
        <Route path='/premiumvideo' element={< Premiumvideo/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
