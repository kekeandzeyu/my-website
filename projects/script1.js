'use script'

const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
const dropdownContent = document.querySelector('.dropdown-content');
const languageLinks = dropdownContent.querySelectorAll('a');

const projectButtons = document.querySelectorAll('.project-button');

let currentLanguage = localStorage.getItem('language') || 'en';
updateLanguage();

checkButtonsVisibility();

languageToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.body.addEventListener('click', () => {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    }
});

// Prevent the dropdown itself from closing when clicked inside
dropdownContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

window.addEventListener('scroll', checkButtonsVisibility); // Use the function for scroll events

function checkButtonsVisibility() {
    projectButtons.forEach(button => {
        const buttonRect = button.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if button is in the initial viewport or has been scrolled to
        if (buttonRect.top < windowHeight || button.classList.contains('show')) {
            button.classList.add('show');
        }

    });
}


function updateLanguage() {
    if (currentLanguage === 'zh') {
        enContent.forEach(el => el.style.display = 'none');
        zhContent.forEach(el => el.style.display = 'block');
        languageToggle.textContent = 'English';
    } else {
        enContent.forEach(el => el.style.display = 'block');
        zhContent.forEach(el => el.style.display = 'none');
        languageToggle.textContent = '中文';
    }
}


languageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const selectedLanguage = link.getAttribute('data-lang');

        if (selectedLanguage !== currentLanguage) {
            currentLanguage = selectedLanguage;
            localStorage.setItem('language', currentLanguage);
            updateLanguage();
        }

        dropdownContent.style.display = 'none';
    });
});