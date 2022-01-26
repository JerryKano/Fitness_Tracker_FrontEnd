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
          <div id="Links">
            <div className="activities">
              <p>Activities: {activity.name}</p>
              <p>Activity Description: {activity.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Activities;