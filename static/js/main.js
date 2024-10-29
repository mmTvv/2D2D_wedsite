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

document.querySelector('.js-transition').addEventListener('click', toggle);

function toggle() {
   var container = document.querySelector('.transition-container');
  
  // manage clases
  var containerClasses = container.classList;
  containerClasses.toggle('js-show-pw');
  containerClasses.toggle('eye-open');
  containerClasses.toggle('eye-close');
  
  // update input
  var input = document.querySelector('.transition-input');
  
  if (containerClasses.contains('js-show-pw')) {
    // use time = animation duration
    var delay = getComputedStyle(container).getPropertyValue('--duration');
    delay = parseInt(delay);
    
    setTimeout(function() {
      input.classList.add('show-input');
      // update input type
      input.type="text";
    }, delay);
  } else {
    // update input type
    input.type="password";
    input.classList.remove('show-input');
  }
}