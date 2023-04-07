const owl = $('.owl-carousel');

owl.owlCarousel();
$('.header__slide-right').click(function () {
    owl.trigger('next.owl.carousel');
})

$('.header__slide-left').click(function () {

    owl.trigger('prev.owl.carousel', [300]);
})