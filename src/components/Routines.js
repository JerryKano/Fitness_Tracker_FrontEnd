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
          <div id="Links">
            <div className="routine">
              <p>Routine Name: {routine.name}</p>
              <p>Creator: {routine.creatorName}</p>
              <p>Goal: {routine.goal}</p>
        {routine.activities.map((activity) => {
        return (
            <div className="activity">
            <p>Activities: {activity.name}</p>
            <p>Activity Description: {activity.description}</p>
            <p>Duration: {activity.duration}</p>
            <p>Count: {activity.count}</p>
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
