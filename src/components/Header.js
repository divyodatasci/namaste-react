import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [buttonLabel, setButtonLabel] = useState("Login");
    return (
        <div className='flex justify-between shadow-lg mb-2 bg-orange-200'>
            <div>
                <Link to='/'><img className='w-28' src= {LOGO_URL} /></Link>
            </div>
            <div>
                    <ul className='flex items-center h-full justify-between gap-8 mr-8'>
                        <li>Online Status: {useOnlineStatus()?'🟢': '🔴'} </li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li>Cart</li>
                        <li> <button className="login-toggle-btn" onClick={()=> {
                            buttonLabel === 'Login' ? setButtonLabel('Logout') : setButtonLabel('Login');

                        }}> {buttonLabel} </button></li>
                    </ul>
            </div>
            
        </div>
    )
}

export default Header;