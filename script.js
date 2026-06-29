// Simple interaction: log to console or add a welcome alert
document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to our Cafe website!");
});

// Example: Change hero background color on click
const hero = document.querySelector('.hero');
hero.addEventListener('click', () => {
    hero.style.backgroundColor = '#d7ccc8';
});