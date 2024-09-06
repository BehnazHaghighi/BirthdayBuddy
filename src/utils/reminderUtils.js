import { differenceInDays, parseISO, startOfDay } from 'date-fns';

// Helper function to calculate upcoming reminders
export const getUpcomingReminders = (birthdays) => {
    const today = startOfDay(new Date()); // Normalize current date to 00:00:00
    const upcomingReminders = [];

    birthdays.forEach((birthday) => {
        const birthdayDate = startOfDay(parseISO(birthday.date)); // Normalize birthday date to 00:00:00
        const daysUntilBirthday = differenceInDays(birthdayDate, today);

        let reminderText = '';

        // Check for 1-day and up to 7-day reminders
        if (daysUntilBirthday === 1 && (!birthday.reminder || birthday.reminder === '1-day')) {
            reminderText = '1 day away';
        } else if (daysUntilBirthday <= 7 && (!birthday.reminder || birthday.reminder === '1-week')) {
            reminderText = `${daysUntilBirthday} days away`;
        }

        if (reminderText) {
            upcomingReminders.push({
                ...birthday,
                reminderText,
                daysUntilBirthday, // sort reminders by days until birthday
            });
        }
    });

    // Sort reminders by the nearest birthday first
    return upcomingReminders.sort((a, b) => a.daysUntilBirthday - b.daysUntilBirthday);
};
