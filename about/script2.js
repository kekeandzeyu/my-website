'use script';

const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
const dropdownContent = document.querySelector('.dropdown-content');
const languageLinks = dropdownContent.querySelectorAll('a');

let currentLanguage = localStorage.getItem('language') || 'en';
updateLanguage();

const userOs = document.querySelector(".os");
let os = "unknown";

languageToggle.addEventListener('click', () => {
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
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