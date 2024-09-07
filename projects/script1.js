const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
let currentLanguage = localStorage.getItem('language') || 'en';
const dropdownContent = document.querySelector('.dropdown-content');
const languageLinks = dropdownContent.querySelectorAll('a');

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