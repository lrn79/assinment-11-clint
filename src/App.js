
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shered/Header/Header';
import Home from './Pages/Home/home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Sign up/Signup';
import BLog from './Pages/Blog/BLog';
import Footer from './Pages/Shered/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import AddItem from './Pages/AddItem/AddItem';
import MyItem from './Pages/MyItem/MyItem';
import ManageItem from './Pages/ManageItem/ManageItem';
import StokeUpdate from './Pages/StokeUpdate/StokeUpdate';
import RequireAuth from './Pages/RequreAuth/RequireAuth';
import { ToastContainer } from 'react-bootstrap';


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
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/additem' element={<AddItem></AddItem>}></Route>
        <Route path='/myitem' element={<RequireAuth><MyItem></MyItem></RequireAuth>}></Route>
        <Route path='/manageitem' element={<ManageItem></ManageItem>}></Route>
        <Route path='/stokeupdate/:id' element={<StokeUpdate></StokeUpdate>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />

    </div>

    // issu link : https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-lrn79/issues/1
  );
}

export default App;
