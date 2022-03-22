import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home"
import { AboutUs } from "./pages/aboutUs/AboutUs"
// import Footer from './components/footer/Footer'
import Modules from './pages/modules/Modules';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Profile } from './pages/profile/Profile';




function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        
        <Routes>
     
          <Route exact path='/'
           element={<Home/>} >
          </Route>
          <Route exact path='/quienes-somos'
            element= {<AboutUs/>}>
          </Route>
          <Route exact path='/formacion'
            element= {<Modules/>}>
          </Route>
          <Route exact path='/registro'
            element= {<Register/>}>
          </Route>

          <Route exact path='/login'
            element= {<Login/>}>
          </Route>

          <Route exact path='/profile'
            element= {<Profile/>}>
          </Route>
        
      
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
