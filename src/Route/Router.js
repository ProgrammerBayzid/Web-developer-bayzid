import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import About from "../Components/Pages/About";
import ContuctUs from "../Components/Pages/ContuctUs";
import Home from "../Components/Pages/Home";
import Login from "../Components/Pages/Login";
import Profile from "../Components/Pages/Profile";
import ProjectCard from "../Components/Pages/ProjectCard";
import SingUp from "../Components/Pages/SingUp";
import Skills from "../Components/Pages/Skills";
import Car from "../Components/Project/Car";
import Doctor from "../Components/Project/Doctor";
import Elarning from "../Components/Project/Elarning";
import Photography from "../Components/Project/Photography";
import ResellPhone from "../Components/Project/ResellPhone";

export const route = createBrowserRouter([


    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/phone',
                element: <ResellPhone></ResellPhone>
            },
            {
                path: '/doctor',
                element: <Doctor></Doctor>
            },
            {
                path: '/photo',
                element: <Photography></Photography>
            },
            {
                path: '/car',
                element: <Car></Car>
            },
            {
                path: '/elarning',
                element: <Elarning></Elarning>
            },
            {
                path: '/project',
                element: <ProjectCard></ProjectCard>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/contuctus',
                element: <ContuctUs></ContuctUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
        ]
    }
])