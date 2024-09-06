// Function to load birthdays from localStorage
export const loadBirthdays = () => {
    const savedBirthdays = localStorage.getItem('birthdays');
    return savedBirthdays ? JSON.parse(savedBirthdays) : [];
};

// Function to save a new birthday in localStorage
export const saveBirthday = (newBirthday) => {
    const currentBirthdays = loadBirthdays();
    const updatedBirthdays = [...currentBirthdays, newBirthday];
    localStorage.setItem('birthdays', JSON.stringify(updatedBirthdays));
};
