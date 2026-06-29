
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const newRes = {
    name: document.getElementById('name').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value, // Add this line
    guests: document.getElementById('guests').value
};

if(confirm("Are you sure you want to delete this booking?")) {
}