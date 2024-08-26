const bar = document.getElementById('bar');
const closeElements = document.getElementsByClassName('close');
const nav = document.getElementsByClassName('navbar')[0]; // Assuming there's only one navbar

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('show');
    });
}

for (let i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('show');
        }
    });
}
