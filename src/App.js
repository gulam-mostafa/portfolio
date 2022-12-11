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


// import "aos/dist/aos.css";

function App() {

  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="Ap">

      <BgAnimation></BgAnimation>
      <div className='sticky top-0 z-50'>
      <Nav></Nav>
      </div>
      <Intro></Intro>
      <Banner></Banner>
      <Skill/>

      <Slider></Slider>
      <Contact></Contact>
     <Footer1></Footer1>
    </div>
  );
}

export default App;
