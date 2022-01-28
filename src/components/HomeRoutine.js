import React, { useState } from 'react';

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";


const HomeRoutine = (props) => {
    const { fetchAllPosts, setForm } = props;
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');
    // const [price, setPrice] = useState('');
    // const [location, setLocation] = useState('');
    // const [willDeliver, setWillDeliver] = useState(false);

    // const [userRoutine, setUserRoutine] = useState([]);
    const [name, setName] = useState("");
    const [goal, setGoal] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const locallySourcedToken = localStorage.getItem("token");

    const handleSubmit = async (event) => {

        event.preventDefault();

        // const locallySourcedToken = localStorage.getItem("token");
        
        try{ 
            const response = await fetch(`${BASE_URL}/routines`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${locallySourcedToken}`
                },
                body: JSON.stringify({
                    name: name,
                    goal: goal,
                    isPublic: isPublic
                  }),
            })
            const data = response.json();
            console.log('locally sourced token', locallySourcedToken)
            console.log("This is our post form's data", data);

            // fetchAllPosts();
            // setTitle('');
            // setDescription('');
            // setPrice('');
            // setLocation('');
            // setWillDeliver(false);
            // setForm(false);

            setName('');
            setGoal('');
            setIsPublic(true);
        }
        catch (err) {
            console.log(err)
        }
    }

    

        


    return (
        <div class="mb-3">
            <form onSubmit={handleSubmit}>

                <input type="text" className="form-control" value={name} placeholder="New Routine Name" onChange={(event) => setName(event.target.value)}></input><br/>

                <textarea type="text" className="form-control" rows="5" value={goal} placeholder="What is your goal?" onChange={(event) => setGoal(event.target.value)}></textarea><br/>

                <label htmlFor="setIsPublicTrue">True</label>
                <input type="radio" id="setIsPublicTrue" value={true} onChange={(event) => setIsPublic(event.target.value)}></input>
                <label htmlFor="setIsPublicFalse">False</label>
                <input type="radio" id="setIsPublicFalse" value={false} onChange={(event) => setIsPublic(event.target.value)}></input><br/>

                <button type="submit" className="btn btn-primary">Create New Routine</button>
                {/* <button className='delete-button' onClick={deleteRoutine(userRoutine.id)}>Delete Routine</button> */}
            </form>
            


        </div>
    )
}


export default HomeRoutine;

