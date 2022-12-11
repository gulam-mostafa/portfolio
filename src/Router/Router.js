import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/About/Banner";
import Blog from "../Components/Blog/Blog";
import Details from "../Components/Details/Details";
import Details1 from "../Components/Details/Details1";
import Details2 from "../Components/Details/Details2";

import Intro from "../Components/Intro";
import Skill from "../Screen/Skill";
import Main from "./Main";



export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Intro></Intro>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/details/1',
                element: <Details></Details>
            },
            {
                path: '/details/2',
                element: <Details1></Details1>
            },
            {
                path: '/details/3',
                element: <Details2></Details2>
            },
            {
                path: '/about',
                element: <Banner></Banner>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            }

        ]
    }
])