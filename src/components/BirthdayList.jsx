import React, { useEffect, useState } from 'react';
import { loadBirthdays, removeBirthday } from '../utils/birthdayStorage';

const BirthdayList = () => {
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        const loadedBirthdays = loadBirthdays();
        setBirthdays(loadedBirthdays);
    }, []);

    const handleDelete = (id) => {
        removeBirthday(id); // Remove birthday from localStorage
        const updatedBirthdays = loadBirthdays(); // Reload birthdays
        setBirthdays(updatedBirthdays); // Update the state
    };

    return (
        <div className="birthday-list">
            <h2>Upcoming Birthdays</h2>
            <ul>
                {birthdays.length > 0 ? (
                    birthdays.map((birthday) => (
                        <li key={birthday.id}>
                            <span>{birthday.name} - {birthday.date}</span>
                            <button
                                className="delete-birthday-button"
                                onClick={() => handleDelete(birthday.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <li>No upcoming birthdays</li>
                )}
            </ul>
        </div>
    );
};

export default BirthdayList;
