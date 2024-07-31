window.addEventListener('load', () => {
    document.querySelectorAll('*').forEach(element => {
        element.style.userSelect = 'text';
    });
})