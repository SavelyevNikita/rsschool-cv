(function() {
    const burgerButtun = document.querySelector('.header__burger');
    burgerButtun.addEventListener('click', () => {
        burgerButtun.classList.toggle('burger_active');
    })
    const burgerMebu = document.querySelector('.header__nav');
    burgerButtun.addEventListener('click', () => {
        burgerButtun.classList.toggle('header__burger');
    })


}());