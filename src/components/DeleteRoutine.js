import React, { useState } from 'react';
const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";


const DeleteRoutine = async (props) => {
    const { routineId } = props;
    const localUserToken = localStorage.getItem('userToken');
    const deleteRoutine = async () => {
        try {
            const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
                method: "DELETE",
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${localUserToken}`
                }
            })
            const result = await response.json();
        }
        catch (error) {
            console.error(error);
        }
    }
    return (
        <button onClick={deleteRoutine}>
            Delete Routine
        </button>
    )
}

export default DeleteRoutine;