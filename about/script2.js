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

function getOS() {
    const userAgent = window.navigator.userAgent;
    const platform = window.navigator.userAgentData?.platform || window.navigator.platform;
    const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
    const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
    const iosPlatforms = ["iPhone", "iPad", "iPod"];

    if (macosPlatforms.includes(platform)) {
        os = "Mac OS";
    } else if (iosPlatforms.includes(platform)) {
        os = "iOS";
    } else if (windowsPlatforms.includes(platform)) {
        os = "Windows";
    } else if (/Android/.test(userAgent)) {
        os = "Android";
    } else if (/Linux/.test(platform)) {
        os = "Linux";
    }

    return os;
}

document.addEventListener('DOMContentLoaded', () => {
    getOS();

    if (os === "iOS") {
        document.body.style.fontFamily = 'SF Pro';
    } else {
        document.body.style.fontFamily = 'Google Sans';
    }

    userOs.innerText = `${os}`;
});