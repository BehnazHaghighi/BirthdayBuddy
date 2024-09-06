// Load birthdays from localStorage
export const loadBirthdays = () => {
    const savedBirthdays = localStorage.getItem('birthdays');
    return savedBirthdays ? JSON.parse(savedBirthdays) : [];
};

// Save a new birthday in localStorage
export const saveBirthday = (newBirthday) => {
    const currentBirthdays = loadBirthdays();
    const updatedBirthdays = [...currentBirthdays, newBirthday];
    localStorage.setItem('birthdays', JSON.stringify(updatedBirthdays));
};

// Remove a birthday by id
export const removeBirthday = (id) => {
    const currentBirthdays = loadBirthdays();
    const updatedBirthdays = currentBirthdays.filter((birthday) => birthday.id !== id);
    localStorage.setItem('birthdays', JSON.stringify(updatedBirthdays));
};
