import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav2';

const Details = () => {
    const technology = ['Authentication system used on firebase.', 'React.js. ', 'For Style React-bootstrap Framework of CSS', 'React router dom', 'Responsive for mobile and desktop'];
    const feature = ['user can download demo of course', 'check out list. ', 'Dark and light mode', 'Blog for learn', 'Responsive for mobile and desktop'];
    return (
        <div className='bg-yellow-200'>
            <Nav></Nav>
            <div className='w-10/12 m-auto   '>
                <div className=' text-center text-xl '>
                    <h1 className='text-4xl my-4 font-semibold'>Project Name <span className='text-green-500 text-4xl'>Learn At Home</span></h1>
                    <p className='text-lg  lg:px-8 text-justify'>
                        The application was made for online education . students can enroll in courses and they can learn the course at home, and people can download a demo of course by pdf. </p>


                    <h1 className='text-2xl font-semibold my-4 underline underline-offset-8 '>Technology Used</h1>
                    <div>
                        {
                            technology.map(my => <li className='text-left mx-8'>{my}</li>)
                        }
                    </div>
                    <h1 className='text-2xl font-semibold my-4 underline underline-offset-8 '>Feature Used</h1>
                    <div>
                        {
                            feature.map(my => <li className='text-left mx-8'>{my}</li>)
                        }
                    </div >
                    <div className='w-10/12 m-auto my-4'>
                        <p className='text-center text-xl'>ScreenShot Of Home Page</p>
                        <img className='card my-8' src="https://i.ibb.co/HYxCjx9/Screenshot-160.png" alt="" />
                        <p className='text-center text-xl'>ScreenShot Of  services</p>
                        <img className='card my-3' src="https://i.ibb.co/RvdsLp6/Screenshot-161.png" alt="" />
                        <p className='text-center text-xl'>ScreenShot Of  blog</p>
                        <img className='card my-8' src="https://i.ibb.co/m8k1nRV/Screenshot-162.png" alt="" />
                    </div>
                    <div className='flex justify-evenly pb-8'>
                        <a className='btn btn-outline rounded '  href="https://online-course-ab442.web.app/ ">Live Link</a>
                        <a className='btn btn-outline rounded '  href="https://github.com/gulam-mostafa/learn-at-home.git">Github link</a>
                        
                    
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;