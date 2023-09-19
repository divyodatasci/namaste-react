import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
    const [UserInfo, setUserInfo] = useState("Default User");
    return (
        <Provider store = {appStore
        }>
            <UserContext.Provider value = {{loggedInUser: UserInfo, setUserInfo}}>
                <div className='app-layout'>
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        children: [
            {
                path: '/',
                element:<Body />
            },

            {
                path: '/about-us',
                element:<About />
            },
            {
                path: '/contact-us',
                element: <Contact/>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement:<Error />
    },
    
]);
root.render(<RouterProvider  router={appRouter}/>);