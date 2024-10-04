document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const navbarMessage = document.getElementById('navbarMessage');
    setTimeout(function() {
        navbarMessage.classList.add('show');
    }, 1000); // Задержка перед началом анимации (1 секунда)
});