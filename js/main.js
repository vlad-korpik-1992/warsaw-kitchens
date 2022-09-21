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
});