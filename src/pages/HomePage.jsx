import React from 'react';
import AddBirthdayButton from '../components/AddBirthdayButton';
import BirthdayList from '../components/BirthdayList';
import BirthdayReminder from '../components/BirthdayReminder';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <BirthdayReminder />
      <div className="welcome-section">
        <h1>Welcome to BirthdayBuddy</h1>
        <p>Never forget your loved ones' birthdays again!</p>
        <AddBirthdayButton />
      </div>
      <BirthdayList />
    </div>
  );
};

export default HomePage;
