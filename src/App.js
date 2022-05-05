
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shered/Header/Header';
import Home from './Pages/Home/home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Sign up/Signup';
import BLog from './Pages/Blog/BLog';
import Footer from './Pages/Shered/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/blogs" element={<BLog></BLog>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
