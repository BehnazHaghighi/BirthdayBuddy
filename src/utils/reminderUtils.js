import { differenceInDays, parseISO, startOfDay } from 'date-fns';

// Helper function to calculate upcoming reminders
export const getUpcomingReminders = (birthdays) => {
    const today = startOfDay(new Date()); // Normalize current date to 00:00:00
    const upcomingReminders = [];

    birthdays.forEach((birthday) => {
        const birthdayDate = startOfDay(parseISO(birthday.date)); // Normalize birthday date to 00:00:00
        const daysUntilBirthday = differenceInDays(birthdayDate, today);

        let reminderText = '';

        if (birthday.reminder === '1-day' && daysUntilBirthday === 1) {
            reminderText = '1 day away';
        } else if (birthday.reminder === '1-week' && daysUntilBirthday === 7) {
            reminderText = '1 week away';
        }

        if (reminderText) {
            upcomingReminders.push({
                ...birthday,
                reminderText,
            });
        }
    });

    return upcomingReminders;
};
