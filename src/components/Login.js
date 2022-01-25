import React, { useState } from "react";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    // const history = useHistory();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setErrorMessage("");
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const info = await response.json();
      if (info.error) {
        return setErrorMessage(info.message);
      } 
      else if (info) { 
        localStorage.setItem("token", info.token);
        props.setUser({
            token: info.token,
        //     id: info.user.id,
            username: info.user.username,
          });
        
    };

    };

    // const locallySourcedToken = localStorage.getItem("token");

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    Username:
                    <br></br>
                    <input type="text" className="form-control" value={username} placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)}></input>
                    Password:
                    <br></br>
                    <input type="password" className="form-control" id="inputPassword4" value={password} placeholder="Enter Password" onChange={(event) => setPassword(event.target.value)}></input>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            <div>
                <p>{errorMessage}</p>
            </div>
        </div>

    )
}

export default Login;