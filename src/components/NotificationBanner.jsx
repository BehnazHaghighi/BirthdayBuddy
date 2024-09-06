import React from 'react';
import './../styles/NotificationBanner.css';

const NotificationBanner = ({ onRequestPermission }) => {
    return (
        <div className="notification-banner">
            <p>Enable notifications to get birthday reminders!</p>
            <button onClick={onRequestPermission} className="enable-notifications-button">
                Enable Notifications
            </button>
        </div>
    );
};

export default NotificationBanner;