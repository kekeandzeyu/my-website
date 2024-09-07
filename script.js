const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
let currentLanguage = localStorage.getItem('language') || 'en';
const dropdownContent = document.querySelector('.dropdown-content');
const languageLinks = dropdownContent.querySelectorAll('a');

const motto = document.getElementById('motto');
const buttons = document.querySelectorAll('.about a, .projects a, .contact a');

window.addEventListener('scroll', () => {
    const mottoRect = motto.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (mottoRect.top < windowHeight / 2 && mottoRect.bottom > windowHeight / 2) {
        motto.classList.add('show');
    }
});

window.addEventListener('scroll', () => {
    buttons.forEach(button => {
        const buttonRect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the button is in the middle OR at the bottom of the screen
        if ((buttonRect.top < windowHeight / 2 && buttonRect.bottom > windowHeight / 2) ||
            (window.scrollY + windowHeight >= document.body.offsetHeight - buttonRect.height)) { // Check within the loop
            button.classList.add('show');
        }
    });
});

if (currentLanguage === 'zh') {
    enContent.forEach(el => el.style.display = 'none');
    zhContent.forEach(el => el.style.display = 'block');
    languageToggle.textContent = 'English';
} else {
    languageToggle.textContent = '中文';
}

languageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLanguage = link.getAttribute('data-lang');

        if (selectedLanguage === 'en') {
            currentLanguage = 'en';
            languageToggle.textContent = '中文';
            enContent.forEach(el => el.style.display = 'block');
            zhContent.forEach(el => el.style.display = 'none');
        } else {
            currentLanguage = 'zh';
            languageToggle.textContent = 'English';
            enContent.forEach(el => el.style.display = 'none');
            zhContent.forEach(el => el.style.display = 'block');
        }

        localStorage.setItem('language', currentLanguage);
        dropdownContent.style.display = 'none';
    });
});