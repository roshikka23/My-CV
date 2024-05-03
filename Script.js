// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Collapsible sections
document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Slider for skills
const skillSlider = document.getElementById('skillSlider');
const skillLevel = document.getElementById('skillLevel');

skillSlider.addEventListener('input', function() {
    const value = this.value;
    skillLevel.textContent = `Skill Level: ${value}%`;
});
