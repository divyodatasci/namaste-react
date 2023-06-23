import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header/>
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement:<Error />
    },
    {
        path: '/about-us',
        element:<About />
    },
    {
        path: '/contact-us',
        element: <Contact/>
    }
]);
root.render(<RouterProvider  router={appRouter}/>);