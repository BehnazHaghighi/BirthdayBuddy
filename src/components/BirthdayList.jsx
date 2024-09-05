import React from 'react';

const BirthdayList = () => {
    const birthdays = [
        { id: 1, name: 'Ali', date: 'September 20, 2024' },
        { id: 2, name: 'Reza', date: 'October 5, 2024' },
    ];

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
