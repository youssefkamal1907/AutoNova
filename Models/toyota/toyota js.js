
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function showDetails(model) {
    var details = document.getElementById('details');
    if (model === 'corolla') {
        details.innerHTML = '<h4>Toyota Corolla</h4><p>Year: 2024<br>Price starts at $23,145 and goes up to $28,345 </p>';
    } else if (model === 'camry') {
        details.innerHTML = '<h4>Toyota Camry</h4><p>Year: 2024<br>Price start at $27,515 for the base trim and $35,390 for the top trim.</p>';
    }
}
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Your message has been sent!');
    this.reset();
})
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
function scrollToSection() {
    const section2 = document.getElementById('models');
    section2.scrollIntoView({ behavior: 'smooth' });
}
document.getElementById('scrollButton').addEventListener('click', scrollToSection);