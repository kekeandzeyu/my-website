'use script';

const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
const dropdownContent = document.querySelector('.dropdown-content');
const languageLinks = dropdownContent.querySelectorAll('a');

const motto = document.getElementById('motto');
const buttons = document.querySelectorAll('.about a, .projects a, .contact a');

let currentLanguage = localStorage.getItem('language') || 'en';
updateLanguage();

languageToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent click from bubbling to body
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.body.addEventListener('click', () => {
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    }
});

dropdownContent.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent clicks inside dropdown from closing it
});

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

        if ((buttonRect.top < windowHeight / 2 && buttonRect.bottom > windowHeight / 2) ||
            (window.scrollY + windowHeight >= document.body.offsetHeight - buttonRect.height)) {
            button.classList.add('show');

            const imageWrapper = button.querySelector('.image-wrapper');
            if (imageWrapper) {
                imageWrapper.classList.add('show');
            }
        }
    });
});

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