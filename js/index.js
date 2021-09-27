// SLIDER //

let counter = 1;

setInterval(function() {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4) {
		counter = 1;
	}
}, 5000);


$('.slider_akcia').slick({
	infinite: false,
	speed: 500,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 992,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 481,
		settings: {
			infinite: false,
			speed: 500,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

$('.slider_buy').slick({
	infinite: false,
	speed: 500,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 992,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			infinite: false,
			speed: 500,
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 481,
		settings: {
			infinite: true,
			speed: 500,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

//  btn-dropdown  //
let btn_dropdown_div = document.querySelectorAll('.btn_dropdown_div');
let text_more = document.querySelectorAll('.text_more');

if(btn_dropdown_div && text_more) {
	btn_dropdown_div.forEach((el, i) => {
		el.addEventListener('click', () => {
			text_more[i].classList.toggle('d-inline')
			if(!text_more[i].classList.contains('d-inline')) {
				el.querySelector('.btn_podrobnoe').innerHTML = 'Подробное';
			}
			else {
				el.querySelector('.btn_podrobnoe').innerHTML = 'Скрыть';
			}
		})
	})
}


//  btn-dropdown  //
let div_btn_onas = document.querySelectorAll('.div_btn_onas');
let onas_more = document.querySelectorAll('.onas_more');

if(div_btn_onas && onas_more) {
	div_btn_onas.forEach((el, i) => {
		el.addEventListener('click', () => {
			onas_more[i].classList.toggle('d-inline')
			if(!onas_more[i].classList.contains('d-inline')) {
				el.querySelector('.onas_btn').innerHTML = 'Подробное';
			}
			else {
				el.querySelector('.onas_btn').innerHTML = 'Скрыть';
			}
		})
	})
}