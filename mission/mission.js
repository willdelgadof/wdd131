document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('theme-selector');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark', savedTheme === 'dark');
        themeSelector.value = savedTheme;
    }

    themeSelector.addEventListener('change', () => {
        const selectedTheme = themeSelector.value;

        if (selectedTheme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }

        localStorage.setItem('theme', selectedTheme);
    });
});

