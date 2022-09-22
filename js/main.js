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