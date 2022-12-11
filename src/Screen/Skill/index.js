import { Card } from 'flowbite-react';
import React from 'react';
import Html from './icon/html.png'
import Css from './icon/css (1).png'
import Md from './icon/mongodb-5-1175140.webp'
import Firebase from './icon/5847f40ecef1014c0b5e488a.png'
import JavaScript from './icon/java.png'
import Netlify from './icon/netlyfi.webp'
import Node from './icon/node-js.png'
import Bst from './icon/bootstrap.png'
import Tail from './icon/tailwind-css-5285308-4406745.webp'
import Vercel from './icon/vercel-icon.svg'
import github from './icon/git.webp'
import dotenv from './icon/dotenv-icon-filled.png'
import express from './icon/express-1.png'
import npm from './icon/orig.png'
import AOS from "aos";
import { useEffect } from 'react';

const Skill = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div id='skill'  className='md:w-8/12 md:mx-auto mx-1 mb-16 z-20'>
            <div >
                <h2 className='text-center text-4xl  font-semibold my-8 text-pink-500'>My Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                    {/* html  */}
                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 z-10 ">
                        <button
                            className="inline-flex w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r hover:bg-gradient-to-t  from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64 "
                        >
                            <img className='w-16 md:w-20' src={Html} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary" style={{ "--value": 85, "--size": "5rem", "--thickness": "3px" }}>HTML</div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* mongodb  */}

                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r hover:bg-gradient-to-t  from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16 md:w-20' src={Md} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary " style={{ "--value": 77, "--size": "5rem", "--thickness": "3px" }}><p className='text-sm'>MongoDB</p></div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* css  */}
                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r hover:bg-gradient-to-t  from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16 md:w-20' src={Css} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary" style={{ "--value": 95, "--size": "5rem", "--thickness": "3px" }}>CSS</div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* firebase  */}
                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16' src={Firebase} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary hover:text-xl" style={{ "--value": 75, "--size": "5rem", "--thickness": "3px" }}>Firebase</div>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* javascript  */}
                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16 md:w-20' src={JavaScript} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary" style={{ "--value": 79, "--size": "5rem", "--thickness": "3px" }}>Javascript</div>
                                </div>
                            </div>
                        </button>
                    </div>


                    {/* npm  */}

                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16 md:w-20' src={npm} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary" style={{ "--value": 84, "--size": "5rem", "--thickness": "3px" }}>NPM</div>
                                </div>
                            </div>
                        </button>
                    </div>
                    {/* tailwind  */}
                    <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                        <button
                            href="#"
                            className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                        >
                            <img className='w-16 md:w-20' src={Tail} alt="" />
                            <div className="text-left mx-2 ">
                                <div className="-mt-1 font-sans text-sm font-semibold">
                                    <div className="radial-progress text-primary" style={{ "--value": 97, "--size": "5rem", "--thickness": "3px" }}>Tailwind</div>
                                </div>
                            </div>
                        </button>
                    </div>
                {/* node  */}
                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={Node} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":75 , "--size": "5rem", "--thickness": "3px"}}>Node.js</div>
                            </div>
                        </div>
                    </button>
                </div>





                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={Bst} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":90 , "--size": "5rem", "--thickness": "3px"}}>Bootstrap</div>
                            </div>
                        </div>
                    </button>
                </div>
{/* Netlify  */}
                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={Netlify} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":90 , "--size": "5rem", "--thickness": "3px"}}>Netlify</div>
                            </div>
                        </div>
                    </button>
                </div>
{/* vercel  */}
                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={Vercel} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":80 , "--size": "5rem", "--thickness": "3px"}}>Vercel</div>
                            </div>
                        </div>
                    </button>
                </div>


{/* github  */}

<div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={github} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":84 , "--size": "5rem", "--thickness": "3px"}}>GitHub</div>
                            </div>
                        </div>
                    </button>
                </div>
{/* vercel  */}
                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={express} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":70 , "--size": "5rem", "--thickness": "3px"}}>Express.JS</div>
                            </div>
                        </div>
                    </button>
                </div>

                {/* dotenv  */}
                <div className=" items-center z-10  justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ">
                    <button
                        href="#"
                        className="inline-flex hover:bg-gradient-to-t  w-full  items-center z-10  justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   px-4 py-2.5 text-white hover:bg-red-400 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gray-700  dark:hover:bg-green-600 dark:focus:ring-gray-700 sm:w-auto  hover:md:w-64"
                    >
                       <img className='w-16 md:w-20' src={dotenv} alt="" />
                        <div className="text-left mx-2 ">
                            <div className="-mt-1 font-sans text-sm font-semibold">
                            <div className="radial-progress text-primary" style={{"--value":74 , "--size": "5rem", "--thickness": "3px"}}>DotEnv</div>
                            </div>
                        </div>
                    </button>
                </div>




















                </div>


            </div>
        </div>
    );
};

export default Skill;