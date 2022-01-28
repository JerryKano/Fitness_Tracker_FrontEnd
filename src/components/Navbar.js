import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null)

    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    const locallySourcedToken = localStorage.getItem("token"); 

    return (
        <div>
            <nav>
                <div className='navBar'>
                <Link to="/">Home</Link>
                </div>
                <div>
                <Link to="/activities">Activities</Link>
                </div>
                <div className="navRoutines">
                <Link to="/routines">Routines</Link>
                </div>

                <div>
                <Link className="navLink" to="/home-routines">
                Home Routines
                </Link>
                </div>
                <div>
                    {
                        isLoggedIn ? 
                        <li><Link to="/" onClick={() => {
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                        }}>Logout</Link></li>
                        
                        :
                        <div>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        
                        </div>
                    }
                </div>
                <div>

                {/* {
                    locallySourcedToken && locallySourcedToken.length ? <p>Hi again, {props.user.username}</p> : ''
                } */}

            </div>
                
            </nav>
        </div>
    )
}

export default NavBar; 