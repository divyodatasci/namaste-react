import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
    const [buttonLabel, setButtonLabel] = useState("Login");
    return (
        <div className='header'>
            <div>
                <img className='logo' src= {LOGO_URL}></img>
            </div>
            <div>
                <div className='nav-items'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
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