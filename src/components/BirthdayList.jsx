import React, { useEffect, useState } from 'react';
import { loadBirthdays } from '../utils/birthdayStorage';

const BirthdayList = () => {
    const [birthdays, setBirthdays] = useState([]);

    useEffect(() => {
        const loadedBirthdays = loadBirthdays();
        setBirthdays(loadedBirthdays);
    }, []);

    return (
        <div className="birthday-list">
            <h2>Upcoming Birthdays</h2>
            <ul>
                {birthdays.length > 0 ? (
                    birthdays.map((birthday) => (
                        <li key={birthday.id}>
                            {birthday.name} - {birthday.date}
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