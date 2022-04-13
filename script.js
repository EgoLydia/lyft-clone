const sidenav = document.getElementById('sidenav')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')

hamburger.addEventListener('click', () => {
    sidenav.style.display = 'block'
});

close.addEventListener('click', () => {
    sidenav.classList.add('animate__slideOutRight')
    setTimeout(function() {
        sidenav.classList.remove('animate__slideOutRight')
        sidenav.style.display = 'none'
    }, 1000);
});

console.log('working');