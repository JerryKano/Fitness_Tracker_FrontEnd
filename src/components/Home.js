import React, { useEffect, useState } from "react";
import { Router } from "react-router-dom/cjs/react-router-dom.min";
// import { DeleteRoutine } from "./DeleteRoutine";

const locallySourcedToken = localStorage.getItem("token");
const BASE_URL = 'http://fitnesstrac-kr.herokuapp.com/api';

const UserRoutines = (props) => {

    // const { userRoutines } = props
    const [userRoutines, setUserRoutines] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [routineName, setRoutineName] = useState('');
    const [routineGoal, setRoutineGoal] = useState('');

    

    const getUserRoutines = async () => {
        const locallySourcedToken = localStorage.getItem('token');
        console.log('this is the getUsersRoutines function')
        const userResponse = await fetch(`${BASE_URL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${locallySourcedToken}`
            }
        })


            ;
        const userData = await userResponse.json();
        console.log('this is userData', userData)

        const response = await fetch(`${BASE_URL}/users/${userData.username}/routines`);
        const data = await response.json();
        setUserRoutines(data);

        
    }

    const deleteRoutine = async (routineId) => {
        try {

            const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }
            })

            const data = await response.json();

            console.log('This is the deleteRoutine function', data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserRoutines()
    }, [])

    console.log('these are the routines', userRoutines)
    let shownRoutines = null;

  
    return (
        <>
          {/* {props.user && <p>{props.user.username}</p>} */}
    
          {userRoutines.map((routine) => {
            return (
              <div id="Links" class="card-body card border-primary border-2 bg-light mb-3">
                  <p></p>
                  <p><h6>Routine Name:</h6> <h2>{routine.name}</h2></p>
                <div className="activities">
                <p><h6>Routine Id: {routine.id} | CreatorID: {routine.creatorId}</h6></p>
                  
                  <p><h6>Routine Goal:</h6> {routine.goal}</p>
                  <button className="btn btn-primary" onClick={() => deleteRoutine(routine.id)}>Delete Routine</button>
                </div>
              </div>
            );
          })}
        </>
      );
    };


export default UserRoutines;