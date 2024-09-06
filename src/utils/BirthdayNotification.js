import { loadBirthdays } from './birthdayStorage';
import { isToday, parseISO } from 'date-fns';

// Function to request notification permission
export const requestNotificationPermission = (setBannerVisible) => {
    if ('Notification' in window) {
        if (Notification.permission === 'default') {
            // If permission is not yet granted or denied, show the banner
            setBannerVisible(true);
        } else if (Notification.permission === 'denied') {
            // If notifications are blocked, keep showing the banner
            setBannerVisible(true);
        } else if (Notification.permission === 'granted') {
            // If notifications are enabled, hide the banner
            setBannerVisible(false);
        }
    } else {
        console.error('This browser does not support notifications.');
    }
};


// Helper function to get notified birthdays from localStorage
const getNotifiedBirthdays = () => {
    const notified = localStorage.getItem('notifiedBirthdays');
    return notified ? JSON.parse(notified) : [];
};

// Helper function to update notified birthdays in localStorage
const updateNotifiedBirthdays = (birthdayId) => {
    const notified = getNotifiedBirthdays();
    notified.push(birthdayId);
    localStorage.setItem('notifiedBirthdays', JSON.stringify(notified));
};

// Function to send a notification
const sendBirthdayNotification = (birthday) => {
    if (Notification.permission === 'granted') {
        new Notification('Birthday Reminder', {
            body: `Today is ${birthday.name}'s birthday!`
        });
        updateNotifiedBirthdays(birthday.id); // Track this birthday as notified
    }
};

// Function to check if today is anyone's birthday and if they haven't been notified yet
export const checkTodayBirthdays = () => {
    const birthdays = loadBirthdays();
    const today = new Date();
    const notifiedBirthdays = getNotifiedBirthdays(); // Get already notified birthdays

    birthdays.forEach((birthday) => {
        const birthdayDate = parseISO(birthday.date);
        if (isToday(birthdayDate) && !notifiedBirthdays.includes(birthday.id)) {
            sendBirthdayNotification(birthday); // Send notification if not already sent
        }
    });
};

// Optionally, clear notifications once per day to allow future notifications
export const clearNotifiedBirthdays = () => {
    localStorage.removeItem('notifiedBirthdays');
};
