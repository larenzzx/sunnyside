const menu = document.querySelector('.menu');
const nav = document.querySelector('.navs');

menu.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});
