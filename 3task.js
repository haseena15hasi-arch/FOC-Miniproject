const modeBtn = document.getElementById('modeBtn');
const topBtn = document.getElementById('topBtn');
const body = document.body;

modeBtn.addEventListener('click', () => {

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeBtn.innerText = '☀ Light Mode';
    } else {
        modeBtn.innerText = '🌙 Dark Mode';
    }
});

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
