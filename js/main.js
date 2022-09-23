$(document).ready(function() {
    $('.material__menu__list__link').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.material__content').removeClass('material__content--active');
		jQuery("#"+id).addClass('material__content--active');
	});
    $('.fittings__link').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.fittings__content').removeClass('fittings__content--active');
		jQuery("#"+id).addClass('fittings__content--active');
	});
	$('.catalog__box__items__link').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.catalog__content').removeClass('catalog__content--open');
		$('.catalog__box__items__link').removeClass('catalog__box__items__link--active');
		jQuery("#"+id).addClass('catalog__content--open');
		let idElem = elem.getAttribute('id');
		jQuery("#"+idElem).addClass('catalog__box__items__link--active');
	});
	$('.project__slider--vertical').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        speed: 4000,
    });
    $('.project__slider--horisontal').slick({
        slidesToShow: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        speed: 2500,
    });
	$('.cart__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.cart__sliderprev'
	});
	$('.cart__sliderprev').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		asNavFor: '.cart__slider',
		dots: false,
		arrows: false,
		focusOnSelect: true,
		responsive: [
		  {
			breakpoint: 767,
			settings: {
				dots: false,
				slidesToShow: 2,
				rows: 1,
				centerMode: false
			}
		  }
		]
	});
});
/* scrollto */

$('.scrollto a').on('click', function scroll(e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 140
    }, {
        duration: 370,
        easing: "linear"
    });
});