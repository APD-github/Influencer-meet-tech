// Loader Animation
const loader = document.querySelector('.loader');
const loaderBalls = document.querySelector('.balls');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        loaderBalls.classList.add('remove-ball');
        loader.classList.add('remove-loader');
    }, 2500);
});

// NavBar 
const toggleBar = document.querySelector('.toggle-bar');

toggleBar.addEventListener('click', (e) => {
    let item = e.currentTarget.parentElement;
    item.classList.toggle('nav-active');
});