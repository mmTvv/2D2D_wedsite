// Логика для переключения темы
const themeToggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark') {
    darkIcon.classList.remove('hidden');
    htmlElement.classList.add('dark');
} else {
    lightIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        lightIcon.classList.add('hidden');
        darkIcon.classList.remove('hidden');
        localStorage.setItem('theme', 'dark');
    }
});
