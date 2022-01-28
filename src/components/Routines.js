import { useState, useEffect } from "react";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";
const Routines = (props) => {
  const [returnedRoutines, setReturnedRoutines] = useState([]);
  const returnRoutines = async () => {
      try {
        const getRoutines = await fetch(`${BASE_URL}/routines`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const response = await getRoutines.json();
      console.log(response);
      setReturnedRoutines(response);
      } catch (error) {
          throw(error)
      }
    
  };
  useEffect(() => {
    returnRoutines();
  }, []);
  return (
    <>
      {/* {props.user && <p>{props.user.username}</p>} */}

      {returnedRoutines.map((routine) => {
        return (
          <div id="Links" class="card-body card border-primary border-2 bg-light mb-3">
            <div className="routine" >
              <p><h5 class="card-header mb-3">Routine Name: {routine.name}</h5></p>
              <p><b>Creator:</b> {routine.creatorName}</p>
              <p><b>Goal:</b> {routine.goal}</p> 
        {routine.activities.map((activity) => {
        return (
            <div className="activity">
            <p><b>Activity:</b> {activity.name}</p>
            <p><b>Activity Description:</b> {activity.description}</p>
            <p><b>Duration:</b> {activity.duration}</p>
            <p><b>Count:</b> {activity.count}</p>
            </div>
        );
        })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Routines;
