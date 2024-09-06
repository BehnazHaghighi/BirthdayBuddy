import React from 'react';
import BirthdayForm from '../components/BirthdayForm';
import { saveBirthday } from '../utils/birthdayStorage';
import './../styles/AddBirthdayPage.css'

const AddBirthdayPage = ({ reloadBirthdays }) => { // Accept reload function as prop
    const handleAddBirthday = (newBirthday) => {
        saveBirthday(newBirthday); // Save the birthday to localStorage
        reloadBirthdays(); // Reload the birthdays in real-time
    };

    return (
        <div className="add-birthday-page">
            <h1>Add New Birthday</h1>
            <BirthdayForm onAddBirthday={handleAddBirthday} />
        </div>
    );
};

export default AddBirthdayPage;
