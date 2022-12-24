import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Landingpage/Banner';
import Footer from './components/Footer/Footer';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';


function App() {
  return (
<>
<Router>
  <Navbar/>
  <Routes>
    <Route path="/" exact element={<Banner/>}></Route>
    <Route path="/Login" exact element={<Login/>}></Route>
    <Route path="/Signup" exact element={<Signup/>}></Route>
  </Routes>
  <Footer/>
</Router>
</>

  );
}

export default App;
