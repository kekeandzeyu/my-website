// This is exactly the same as about/script.js,
// just make sure you have included the script in contact/index.html correctly
const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
let currentLanguage = localStorage.getItem('language') || 'en';

if (currentLanguage === 'zh') {
    enContent.forEach(el => el.style.display = 'none');
    zhContent.forEach(el => el.style.display = 'block');
    languageToggle.textContent = 'English';
} else {
    languageToggle.textContent = '中文';
}

languageToggle.addEventListener('click', () => {
    if (currentLanguage === 'en') {
        currentLanguage = 'zh';
        languageToggle.textContent = 'English';
    } else {
        currentLanguage = 'en';
        languageToggle.textContent = '中文';
    }

    enContent.forEach(el => el.style.display = currentLanguage === 'en' ? 'block' : 'none');
    zhContent.forEach(el => el.style.display = currentLanguage === 'zh' ? 'block' : 'none');

    localStorage.setItem('language', currentLanguage);
});