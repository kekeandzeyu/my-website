const languageToggle = document.getElementById('language-toggle');
const enContent = document.querySelectorAll('.en');
const zhContent = document.querySelectorAll('.zh');
let currentLanguage = localStorage.getItem('language') || 'en';
const buttons = document.querySelectorAll('.projects a, .about a, .contact a');
let scrolled = false;
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
        dropdownContent.style.display = 'none'; // Close the dropdown
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.offsetHeight;
    const contentHeight = docHeight - windowHeight;

    if (scrollY > contentHeight - 200 && !scrolled) {
        // Start floating effect when user scrolls past a certain point
        buttons.forEach(button => {
            button.style.bottom = "0";
            button.style.transform = "translateY(0)";
            button.style.opacity = "1";
        });
        scrolled = true;
    }
});