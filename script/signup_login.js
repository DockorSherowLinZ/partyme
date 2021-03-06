const container = document.querySelector('.container-sign');
const toggleBtns = document.querySelectorAll('.toggle-btn');

function toggle() {
    if (container.classList.contains('sign_in')) {
        container.classList.remove('sign_in');
        container.classList.add('sign_up');
    }
    else if (container.classList.contains('sign_up')) {
        container.classList.remove('sign_up');
        container.classList.add('sign_in');
    }
}

toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', toggle);
});