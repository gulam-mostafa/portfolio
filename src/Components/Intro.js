import React from 'react';
import TextAnimation from 'react-text-animations';
import { useCallback } from "react";
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import BgAnimation from './BgAnimation';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import resume from './MostafaPDF.pdf'
import Typewriter from 'typewriter-effect';



const Intro = () => {



    return (
        <div className=' text-center font-bold my-32 z-10 ' id='home'>
            {/* <p>hello</p> */}



            <div className='my-8 text-5xl'>
                {/* <TextAnimation.Clip className='text-red-500' target="Visitor" text={['Visitor!', 'Visitor!', 'Visitor!']}>
                    Hay Visitor
                </TextAnimation.Clip> */}
                <Typewriter 
                    onInit={(typewriter) => {
                        typewriter.typeString('Welcome to my portfolio!', )
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .pauseFor(9000000)
                            .deleteAll()
                            .callFunction(() => {
                                console.log('All strings were deleted');
                            })
                            .start();
                    }}
                />

            </div>

            <h2 className='text-5xl animate__animated animate__backInRight animate__slower '>I'm <span className='text-violet-500 my-5 text-5xl '>Md Gulam</span></h2>
            <h1 class="animate__animated animate__backInLeft animate__slower text-violet-500 my-5 text-5xl">Mostafa</h1>

            <p className='text-sm font-thin'>I'm a Front-end Web Developer. <br /> I'm passionate about coding. I'm passionate about programming</p>

            <div className='flex justify-center my-8 gap-6' >
                <a className='buton-cus text-5xl ' target={'blank'} href="https://www.facebook.com/gulam.mostafa.22/"> <SlSocialFacebook /></a>
                <a className='text-2xl buton-cus hover:text-red-800' target={'blank'} href="https://github.com/gulam-mostafa"> <AiFillGithub /></a>
                <a className='text-4xl buton-cus hover:text-red-800' target={'blank'} href="https://www.linkedin.com/notifications/?filter=all"> < SlSocialLinkedin /></a>
                <a className='text-4xl buton-cus hover:text-red-800' target={'blank'} href="https://api.whatsapp.com/send?phone=8801812456207&text=hi"> < AiOutlineWhatsApp /></a>
            </div>
            <div className='flex justify-center gap-3'>

                <button onClick={() => window.open(resume)} className="buton-cus animate__animated animate__rotateInDownLeft animate__slower">Download CV</button>

                <button className="buton-cus animate__animated animate__rotateInDownRight animate__slow"><a href="">See More</a></button>
            </div>
        </div>

    );
};

export default Intro;


