import React from 'react';
import { Link } from 'react-scroll';
import resume from './MostafaPDF.pdf'


const Nav = () => {
    return (
        <div  >
            <div className="navbar bg-blue-500 px-10 text-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={800} >Home</Link></li>
     
     <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={800} >About</Link></li>
     <li><Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={1800} >Skill</Link></li>
     <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={2300} >Projects</Link></li>
     <li><Link  onClick={() => window.open(resume)} className='hover:text-white hover:rounded-lg hover:bg-red-800'>Download CV</Link></li>
     <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={2800} className="hidden md:block">Contact us</Link>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl">Md Gulam Mostafa</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={800} >Home</Link></li>
     
      <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={800} >About</Link></li>
      <li><Link activeClass="active" to="skill" spy={true} smooth={true} offset={50} duration={1800} >Skill</Link></li>
      <li><Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={2300} >Projects</Link></li>
      <li><Link  onClick={() => window.open(resume)} className='hover:text-white hover:rounded-lg hover:bg-red-800'>Download CV</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={2800} className="hidden md:block">Contact us</Link>
  </div>
</div>
        </div>
    );
};

export default Nav;