import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
    const [buttonLabel, setButtonLabel] = useState("Login");
    return (
        <div className='header'>
            <div>
                <Link to='/'><img className='logo' src= {LOGO_URL} /></Link>
            </div>
            <div>
                <div className='nav-items'>
                    <ul>
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
            
        </div>
    )
}

export default Header;