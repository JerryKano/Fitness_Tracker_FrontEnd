import React, { useState } from 'react';
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api"


const UpdateRoutine = async (props) => {
    const { routineId } = props;
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('')
    const [isPublic, setIsPublic] = useState(false);

    const updateRoutine = async () => {
        try {
            const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
                method: "PATCH",
                body: JSON.stringify({
                    name: name,
                    goal: goal,
                    isPublic: isPublic
                })
            })
            const result = await response.json();
            setName('');
            setGoal('');
            setIsPublic(false);
        }
        catch (error) {
            console.error(error);
        }
    }

    return (
        <form>
            <textarea type="text" value={name} placeholder="Enter New Routine Name" onChange={(event) => setName(event.target.value)}>

            </textarea>
            <br></br>
            <textarea type="text" value={goal} placeholder="Enter New Routine Goal" onChange={(event) => setGoal(event.target.value)}>

            </textarea>
            <br></br>
            <input type="radio" value={true} id="true" name="isPublic" onChange={(event) => setIsPublic(event.target.value)}>

            </input>
            <label>Make Public</label>
            <input type="radio" value={false} id="false" name="isPublic" onChange={(event) => setIsPublic(event.target.value)} checked>

            </input>
            <label>Do Not Make Public</label>
            <br></br>
            <button onClick={updateRoutine}>
                Update Routine
            </button>
        </form>
    )
}

export default UpdateRoutine;