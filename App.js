import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Videos from './pages/Videos';
import Wallet from './pages/Wallet';
import Explore from './pages/Explore';
import Searchbar from './pages/Searchbar'
function App() {
  return (
<>
    <div className='container-fluid con'>
      <div className='row'>
{/* <Home></Home>
    <Profile></Profile>
    <Videos></Videos>
    <Wallet></Wallet>
    <Explore></Explore> */}
    
    <BrowserRouter>
    <Sidebar></Sidebar>
    {/* <Content></Content> */}
 <Routes>
 <Route path='/Home' element={<Home/>}></Route>
 <Route path='/Profile' element={<Profile/>}></Route>
 <Route path='/Videos' element={<Videos/>}></Route>
 <Route path='/Wallet' element={<Wallet/>}></Route>
 <Route path='/Explore' element={<Explore/>}></Route>
 <Route path='/Searchbar' element={<Searchbar/>}></Route>
 </Routes>
 </BrowserRouter>
 </div>
 </div>
 </>
  );
}export default App;
