import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BirthdayForm = ({ onAddBirthday }) => {
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [reminder, setReminder] = useState('none');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !birthday) {
            alert('Please fill out all fields');
            return;
        }
        const newBirthday = {
            id: Date.now(), // Unique ID for the new birthday
            name,
            date: birthday,
            reminder,
        };
        onAddBirthday(newBirthday);
        navigate('/'); // Redirect back to the homepage
    };

    const handleCancel = () => {
        navigate('/'); // Return to the homepage
    };

    return (
        <form className="birthday-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="birthday">Birthday:</label>
                <input
                    type="date"
                    id="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="reminder">Reminder:</label>
                <select
                    id="reminder"
                    value={reminder}
                    onChange={(e) => setReminder(e.target.value)}
                >
                    <option value="none">No Reminder</option>
                    <option value="1-day">1 Day Before</option>
                    <option value="1-week">1 Week Before</option>
                </select>
            </div>

            <div className="form-actions">
                <button type="submit" className="save-button">Save</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default BirthdayForm;