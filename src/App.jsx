import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBirthdayPage from './pages/AddBirthdayPage';
import { checkTodayBirthdays, requestNotificationPermission, clearNotifiedBirthdays } from './utils/BirthdayNotification';
import NotificationBanner from './components/NotificationBanner';

const App = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Clear notified birthdays if it's a new day
    const isNewDay = () => {
      const today = new Date().toDateString();
      const lastClearDate = localStorage.getItem('lastClearDate');
      return today !== lastClearDate;
    };

    if (isNewDay()) {
      clearNotifiedBirthdays();
      localStorage.setItem('lastClearDate', new Date().toDateString());
    }

    // Check and request notification permission, control banner visibility
    requestNotificationPermission(setShowBanner);

    // Check today's birthdays and send notifications if needed
    checkTodayBirthdays();
  }, []);

  const handlePermissionRequest = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        setShowBanner(false); // Hide banner if permission is granted
        checkTodayBirthdays(); // Recheck birthdays after permission is granted
      } else if (permission === 'denied') {
        setShowBanner(true); // Keep banner visible if permission is denied
        alert('You have blocked notifications. Please enable them from your browser settings to receive birthday reminders.');
      }
    });
  };

  return (
    <Router>
      {showBanner && (
        <NotificationBanner onRequestPermission={handlePermissionRequest} />
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-birthday" element={<AddBirthdayPage />} />
      </Routes>
    </Router>
  );
};

export default App;
