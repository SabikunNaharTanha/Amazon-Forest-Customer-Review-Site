import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/Dashboard'
import About from './components/About/About';
import Notfound from './components/Notfound/Notfound';
import Footer from './Hook/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/customerReview' element={<CustomerReview />}></Route>
        <Route path='/dashboard' element={<DashBoard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<Notfound />}></Route>
      </Routes>
      {/* <Footer></Footer> */}


    </div>
  );
}

export default App;
