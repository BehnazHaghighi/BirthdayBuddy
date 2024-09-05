import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddBirthdayButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add-birthday');//todo
    };

    return (
        <button className="add-birthday-button" onClick={handleClick}>
            Add Birthday
        </button>
    );
};

export default AddBirthdayButton;
