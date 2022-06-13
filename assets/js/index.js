$(document).ready(function () {
    const IMAGES = new Array(
        './assets/img/food-1.jpg',
        './assets/img/food-2.jpg',
        './assets/img/food-3.jpg',
        './assets/img/food-4.jpg',
        './assets/img/food-5.jpg',
        './assets/img/food-6.jpg',
        './assets/img/food-7.jpg',
        './assets/img/food-8.jpg',
        './assets/img/food-9.jpg',
        './assets/img/food-10.jpg'
    );

    setInterval(function () {
        const randomImage = IMAGES[Math.floor(Math.random() * IMAGES.length)];
        console.log(randomImage);
        $('.container__image').css('background', 'url(' + randomImage + ')');
        console.log($('.container__image').css('background'));
    }, 8000);
});