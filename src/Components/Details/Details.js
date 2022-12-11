import React from 'react';
import Nav from './Nav2';

const Details = () => {
    const technology = ['Authentication system used on firebase. And node.js use for backend development post method, read method, edit method.', 'Dashboard implement for user data manage, Payment System implement and Add product for seller post . ', 'For Style tailwind Framework of CSS', 'Payment system added, buyer can pay', 'JWT Technology Implement for Security'];
    const feature = ['Use Can report to admin for bad products', 'Seller can verify and they get blue mark. ', 'Add wishList', 'Add Products', 'Seller cant delete him items'];
    return (
        <div className='bg-yellow-200'>
            <Nav></Nav>
            <div className='w-10/12 m-auto   '>
                <div className=' text-center text-xl '>
                    <h1 className='text-4xl my-4 font-semibold'>Project Name <span className='text-green-500 text-4xl'>Computer House</span></h1>
                    <p className='text-lg  lg:px-8 text-justify'>
                        Basically this project is made for product buy and sell. Every person can open an account by their email address. At opening time there is a  selection option and they can select a buyer or seller option. if they select a buyer option then he/she can buy items. and  if they select the seller option then she/he can sell items via this site, sellers can add a product and they can advertise an item. If the seller advertises an item then that item will be shown on the site home page. seller , buyer , and admin all get an individual dashboard. They can manage their activities from the dashboard. This site also has a payment system where buyers can pay.</p>


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
                    <img className='card my-8' src="https://i.ibb.co/JrYs3mX/Screenshot-155.png" alt="" />
                    <img className='card my-3' src="https://i.ibb.co/1JpVk07/Screenshot-154.png" alt="" />
                    <img className='card my-8' src="https://i.ibb.co/cr9DFvB/Screenshot-153.png" alt="" />

                </div>
                <div className='flex justify-evenly pb-8'>
                    <a className='btn btn-outline rounded ' target={'black'} href="https://computers-house.web.app/">Live Link</a>
                    <a className='btn btn-outline rounded 'target={'black'} href="https://github.com/gulam-mostafa/comouter-house-client.git">Github link</a>


                </div>
            </div>
        </div>
    );
};

export default Details;