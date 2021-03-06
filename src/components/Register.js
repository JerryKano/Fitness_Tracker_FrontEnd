import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api'; 


const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('this is the handle submit');

        const createUser = async (usernameInput, passwordInput) => {
            console.log('These are the arguments', usernameInput, passwordInput)
            // console.log('This is the createUser func')
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                     
                        username: usernameInput,
                        password: passwordInput,
                    
                })
            });
            console.log('This is the response', response);
            if (response) {
                const  { token }  = await response.json();
                console.log("this is the token:", token)
                localStorage.setItem("token", token)
                
            }
            
            
            // if (data) {
            //     const  { token }  = await data.json();
            //     console.log("this is the token:", token)
            //     localStorage.setItem("token", token)
                
            // }
            return response;
            
        
            
            
        }
        
        createUser(username, password)
        setUsername('');
        setPassword('');
        
       
            
        }
    



    const locallySourcedToken = localStorage.getItem('token');

    return (
        <div className='login-form'>
            <form onSubmit={handleSubmit}>
            <br></br>
                New User:
                <input type='text' className="form-control" placeholder='Username' value={username} onChange={(event) => {
                    // console.log('Username input', event.target.value)
                    setUsername(event.target.value)
                    // console.log('The state user', username)
                }}>
                </input>
                Password:
                <br></br>
                <input type='text' className="form-control" placeholder='Password' value={password} onChange={(event) => {
                    // console.log('Password input', event.target.value)
                    setPassword(event.target.value)
                    // console.log('The state', password)
                }}>
                </input>
                <br></br>
                <button className="btn btn-primary" type='submit'>
                    Register
                </button>
            </form>

            <div>
                {
                    locallySourcedToken && locallySourcedToken.length ? <div> Logged In. Go ahead and create a new routine in My Routines </div> : ''
                }
            </div>
        </div>
    )



}

export default Register;