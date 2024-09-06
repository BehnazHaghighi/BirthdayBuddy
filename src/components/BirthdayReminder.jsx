import React, { useEffect, useState } from 'react';
import { loadBirthdays } from '../utils/birthdayStorage';
import { getUpcomingReminders } from '../utils/reminderUtils';

const BirthdayReminder = () => {
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        const birthdays = loadBirthdays();
        console.log(birthdays);
        const upcomingReminders = getUpcomingReminders(birthdays);
        console.log(upcomingReminders);
        setReminders(upcomingReminders);
    }, []);

    return (
        <div className="birthday-reminder">
            {reminders.length > 0 ? (
                <div className="reminder-list">
                    <h2>Upcoming Birthday Reminders</h2>
                    <ul>
                        {reminders.map((reminder) => (
                            <li key={reminder.id}>
                                {reminder.name}'s birthday is coming up on {reminder.date}!
                                ({reminder.reminderText})
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No upcoming birthday reminders.</p>
            )}
        </div>
    );
};

export default BirthdayReminder;
