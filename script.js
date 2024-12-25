const menu = document.querySelector('.menu');
const nav = document.querySelector('.navs');
const link = document.querySelectorAll('.navs a');

menu.addEventListener('click', () => {
    if (nav.style.display === 'flex') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'flex';
    }
});


link.forEach(links => {
    links.addEventListener('click', () => {
        nav.style.display = 'none';
    })
})