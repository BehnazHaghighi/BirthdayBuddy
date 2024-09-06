import { parseISO, differenceInDays, addYears, isBefore, isToday } from 'date-fns';

// Function to get the next birthday
export const getNextBirthday = (birthdayDate) => {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Create birthday date object for this year
    let nextBirthday = new Date(currentYear, birthdayDate.getMonth(), birthdayDate.getDate());

    // If the birthday has already passed this year, calculate it for next year
    if (isBefore(nextBirthday, today) && !isToday(nextBirthday)) {
        nextBirthday = addYears(nextBirthday, 1);
    }

    return nextBirthday;
};

// Function to sort birthdays by next upcoming birthday, with today's birthdays first
export const sortBirthdaysByNext = (birthdays) => {
    return birthdays.sort((a, b) => {
        const nextBirthdayA = getNextBirthday(parseISO(a.date));
        const nextBirthdayB = getNextBirthday(parseISO(b.date));

        // Prioritize today's birthdays
        if (isToday(nextBirthdayA)) return -1;
        if (isToday(nextBirthdayB)) return 1;

        // Otherwise, sort by nearest upcoming birthday
        return differenceInDays(nextBirthdayA, new Date()) - differenceInDays(nextBirthdayB, new Date());
    });
};
