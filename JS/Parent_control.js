// script.js

// Get the settings form and monitoring section
const settingsForm = document.getElementById('settings-form');
const monitoringSection = document.getElementById('monitoring');
const blockingSection = document.getElementById('blocking');

// Get the website history and blocked websites lists
const websiteHistoryList = document.getElementById('website-history');
const blockedWebsitesList = document.getElementById('blocked-websites-list');

// Get the save settings button
const saveSettingsButton = document.getElementById('save-settings');

// Get the clear history button
const clearHistoryButton = document.getElementById('clear-history');

// Initialize the settings object
let settings = {
    blockedWebsites: [],
    allowedGames: [],
    timeLimit: 60
};

// Load the settings from local storage
if (localStorage.getItem('settings')) {
    settings = JSON.parse(localStorage.getItem('settings'));
}

// Update the settings form with the loaded settings
settingsForm.blockedWebsites.value = settings.blockedWebsites.join('\n');
settingsForm.allowedGames.value