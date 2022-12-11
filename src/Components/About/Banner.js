import React from 'react';
import img from '../backround removwer.png'
import BgAnimation from '../BgAnimation';

const Banner = () => {
    return (
        <div className='lg:w-9/12 m-auto' id='about'>
            <div className='flex  lg:mx-10  mx-2 m-auto my-10 justify-evenly  '>


                <div className="card lg:card-side  shadow-s bg-transparent">
                    <div >
                        <figure className='md:w-96  m-auto bg-transparent animate__animated animate__backInLeft animate__slower'><img className='w- 8/12' src={img} alt="Album" /></figure>
                    </div>
                    <div className="card-body1 lg:w-full my-auto  animate__animated animate__backInRight animate__slower">
                        <h2 className="card-titl text-red-500 lg:text-6xl text-3xl text-center my-4 z-10">About ME</h2>
                        <h3 className='text-3xl text-center text-blue-700 my-4 z-10'>
                            I'm a Junior Web Developer.</h3>
                        <p className='text-green-500 text-xl lg:p-10 py-10 px-1 z-10 text-justify'>Programing is my passion. and i'm expertise  are HTML, CSS, Bootstrap, JavaScript, ES6, React js, MongoDB, Express.js, Node JS. I love to learn new things. Now I'm learning React Native,  and Python

                            I also improve myself every day, optimizing my workflow in every step of my life. I'm always determined to achieve my goals. I'm currently seeking an opportunity to extend my web development skills and knowledge</p>
                        <div className="card-actions justify-end">
                            {/* <button className="btn btn-primary">Listen</button> */}
                        </div>
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Banner;