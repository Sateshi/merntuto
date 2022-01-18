import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function CreateExercises(props) {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());

    const onSubmit = () => {

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date,
        }
        console.log(exercise);
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeDuration = (e) => {
        setDuration(e.target.value);
    }

    const onChangeDate = (date) => {
        setDate(date)
    }
    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Exercise name: </label>
                    <input type="text" className="form-control" value={username} onChange={onChangeUsername} />
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" className="form-control" value={description} onChange={onChangeDescription} />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes)</label>
                    <input type="text" className="form-control" value={duration} onChange={onChangeDuration} />
                </div>
                <div className="form-group">
                        <label>Date</label>
                        <div>
                            <DatePicker
                                selected={date}
                                onChange={onChangeDate}
                            />
                        </div>
                </div>

                <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateExercises;