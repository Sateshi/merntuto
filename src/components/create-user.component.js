import React, { useState } from 'react';
import axios from 'axios';

function CreateUsers(props){
    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
        }
        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));
            
        setUsername('');
    }
    return(
        <div>
            <h3>Create New User</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" className="form-control" value={username} onChange={onChangeUsername} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Create New User" />
                </div>
            </form>
        </div>
    )
}

export default CreateUsers;