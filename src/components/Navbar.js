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
        <div class>
            <nav class="navbar navbar-dark bg-dark text-light bg-gradient">
                
                <div>
                <a class="nav-item nav-link" href="#">
                <Link to="/activities">All Activities</Link></a>
                </div>
                <div className="navRoutines">
                <Link to="/routines">All Routines</Link>
                </div>

                <div>
                {/* <Link className="navLink" to="/home-routines">
                Add Home Routine
                </Link> */}
                </div>
                {/* <div className='navBar'>
                <Link to="/my-routines">My Routines</Link>
                </div> */}
                <p><div><p></p>
                    {
                        isLoggedIn ? 
                        <li><Link to="/" onClick={() => {
                            localStorage.removeItem("token");
                            setIsLoggedIn(false);
                        }}>Logout</Link></li>
                        
                        :
                        <div><p></p>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        
                        </div>
                    }
                </div></p>
                <div className='navBar'>
                {
                        isLoggedIn ?
                        <>
                        <Link to="/my-routines">My Routines</Link>
                        <p><Link className="navLink" to="/home-routines">Add My Routine</Link></p>
                        </>
                        :
                        <div><a>
                        Please login and refresh to see Your Routines
                        </a></div>
                    }
                <div></div>

                {
                    locallySourcedToken && locallySourcedToken.length ? <p>You're logged in!</p> : ''
                }

            </div>
                
            </nav>
        </div>
    )
}

export default NavBar; 