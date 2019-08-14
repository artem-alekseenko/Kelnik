const toggleMenu = () => {
    const toggleMenuArea = document.querySelector('.toggle-menu');
    const header = document.querySelector(".header");
    const mainNav = document.querySelector(".nav");
    const body = document.querySelector("body");

    toggleMenuArea.addEventListener('click', function () {
        toggleMenuArea.classList.toggle('is-active');
        mainNav.classList.toggle('is-active');
        header.classList.toggle('is-fixed');
        body.classList.toggle('is-fixed');
    });
};

toggleMenu()
