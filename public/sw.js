self.addEventListener('push', function (event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new reminder!',
        icon: '/path/to/icon.png',
        badge: '/path/to/badge.png',
    };
    event.waitUntil(
        self.registration.showNotification('BirthdayBuddy Reminder', options)
    );
});
