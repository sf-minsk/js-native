import React from "react";


export const User = () => {
    const deleteUser = () => {
        alert('user has been deleted')
    }



    return (
        <div>
            Dimych
            <button onClick={deleteUser}>delete</button>
            <button>save</button>
        </div>
    )
}














