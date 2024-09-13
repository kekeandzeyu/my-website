addEventListener('fetch', event => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        document.body.style.fontFamily = 'iOSFont';
    }
});