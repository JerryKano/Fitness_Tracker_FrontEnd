import { useEffect, useState } from "react";
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";
// import { useHistory } from "react-router-dom";

const Activities = (props) => {
    const [returnedActivities, setReturnedActivities] = useState([]);
    const returnActivities = async () => {
      try {
        // const response = props.user
        const getActivities = await fetch(`${BASE_URL}/activities`, {
            headers: { "Content-Type": "application/json" },
          });
      const response = await getActivities.json();
      setReturnedActivities(response);
      } catch (error) {
          throw(error)
      }
    

    // props.setActivities(info);
    // console.log(info);
  };
  useEffect(() => {
    returnActivities();
  }, []);

  return (
    <>
      {/* {props.user && <p>{props.user.username}</p>} */}

      {returnedActivities.map((activity) => {
        return (
          <div id="Links" class="card-body card border-primary border-2 bg-light mb-3">
              <br></br>
            <div className="activities">
              <p><h6>Activities:</h6> {activity.name}</p>
              <p><h6>Activity Description:</h6> {activity.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Activities;