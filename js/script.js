(function() {
    const burgerButton = document.querySelector('.header__burger');
    // console.log(burgerButtun);
    burgerButton.addEventListener('click', () => {
        burgerButton.classList.toggle('burger_active');
    })
    const burgerMenu = document.querySelector('.header__burger');
    const headerContainer = document.querySelector('.header__container');
    const headerNav = document.querySelector('.header__nav');
    // console.log(burgerMenu);
    burgerMenu.addEventListener('click', () => {
        console.log(headerContainer);
        console.log(headerNav);
        headerContainer.classList.toggle('header__container_active');
        headerNav.classList.toggle('header__nav_active');
    })

}());