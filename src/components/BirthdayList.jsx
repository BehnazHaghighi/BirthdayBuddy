import React from 'react';
import { removeBirthday } from '../utils/birthdayStorage';
import { isToday, parseISO } from 'date-fns';

const BirthdayList = ({ birthdays, reloadBirthdays }) => {
    const handleDelete = (id) => {
        removeBirthday(id); // Remove birthday from localStorage
        reloadBirthdays();  // Reload and sort the birthday list
    };

    return (
        <div className="birthday-list">
            <h2>Upcoming Birthdays</h2>
            <ul>
                {birthdays.length > 0 ? (
                    birthdays.map((birthday) => {
                        const birthdayDate = parseISO(birthday.date);
                        const isBirthdayToday = isToday(birthdayDate); // Check if birthday is today

                        return (
                            <li
                                key={birthday.id}
                                style={{
                                    backgroundColor: isBirthdayToday ? 'var(--bisque-color)' : 'var(--list-item-bg)',
                                }}
                            >
                                <span>{birthday.name} - {birthdayDate.toLocaleDateString()}</span>
                                <button
                                    className="delete-birthday-button"
                                    onClick={() => handleDelete(birthday.id)}
                                >
                                    Remove
                                </button>
                            </li>
                        );
                    })
                ) : (
                    <li>No upcoming birthdays</li>
                )}
            </ul>
        </div>
    );
};

export default BirthdayList;
