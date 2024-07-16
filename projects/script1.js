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

    enContent.forEach(el => el.style.display = currentLanguage === 'en' ? 'inline' : 'none');
    zhContent.forEach(el => el.style.display = currentLanguage === 'zh' ? 'inline' : 'none');
    localStorage.setItem('language', currentLanguage);
});