import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import Nav from './Components/Nav';
import Intro from './Components/Intro';
import BgAnimation from './Components/BgAnimation';
import 'animate.css';
import { useEffect } from 'react';
import AOS from "aos";

import Slider from './Components/Slider/Slider';
import Contact from './Components/Contact';
import Banner from './Components/About/Banner';
import Footer1 from './Components/Footer/Footer1';
import Skill from './Screen/Skill';
import Blog from './Components/Blog/Blog';
import { BrowserRouter, Route, RouterProvider, } from 'react-router-dom';
import { Routes } from './Router/Router';


// import "aos/dist/aos.css";

function App() {

  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Ap">
 <RouterProvider router={Routes}></RouterProvider>
   
   


      {/* <Footer1></Footer1> */}
    </div>
  );
}


export default App;
