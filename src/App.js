import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Home } from "./pages/home/Home"
import { AboutUs } from "./pages/aboutUs/AboutUs"
// import Footer from './components/footer/Footer'
import Modules from './pages/modules/Modules';




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
        
      
        </Routes>
      </Router>
      
     
    </div>
  );
}

export default App;
