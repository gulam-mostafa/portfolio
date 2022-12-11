import React from 'react';
import Nav from './Nav2';

const Details = () => {
    const technology = ['Authentication system used on firebase.', ' Node.js used for backed. ', 'For Style tailwind Framework of CSS', 'DotEnv, Express.js, used for backend', 'JWT Technology Implement for Security'];
    const feature = ['users take any service from their home', 'Users can review on service Provider. ', 'Add to service list', 'Delete service', 'delete and update users  comment'];
    return (
        <div className='bg-yellow-200'>
            <Nav></Nav>
            <div className='w-10/12 m-auto   '>
                <div className=' text-center text-xl '>
                    <h1 className='text-4xl my-4 font-semibold'>Project Name <span className='text-green-500 text-4xl'>Power Service</span></h1>
                    <p className='text-lg  lg:px-8 text-justify'>
                    This application is for online service. This application can use a service provider line Electrical technician , delivery man, a shopkeeper or other person. Mainly people show their service to those they provide. And users can receive their service. Users also give service ratings and users can comment under service. Also users can add service lists.</p>


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
                    </div>
                   <div className='w-10/12 m-auto'>
                   <p className='text-center text-xl '>ScreenShot Of Home Page</p>
                    <img className='card my-8' src="https://i.ibb.co/KzqKb8V/Screenshot-156.png" alt="" />
                    <p className='text-center text-xl'>ScreenShot Of user service</p>
                    <img className='card my-3' src="https://i.ibb.co/GMsp4Xx/Screenshot-157.png" alt="" />
                    <p className='text-center text-xl'>ScreenShot Of user review</p>
                    <img className='card my-8' src="https://i.ibb.co/tz7SNwk/Screenshot-159.png" alt="" />
                   </div>

                </div>
                <div className='flex justify-evenly pb-8'>
                        <a className='btn btn-outline rounded '  href="https://service-review-9125a.web.app ">Live Link</a>
                        <a className='btn btn-outline rounded '  href="https://github.com/gulam-mostafa/-Power-Services-client.git">Github link</a>
                        
                    
                    </div>
            </div>
        </div>
    );
};

export default Details;