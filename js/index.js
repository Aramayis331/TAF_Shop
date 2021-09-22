// SLIDER //

let counter = 1;

setInterval(function() {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4) {
		counter = 1;
	}
}, 10000000);

// SLIDER_AKCIA //
let arrow_right_akcia = document.getElementById('arrow_right_akcia');
let arrow_left_akcia = document.getElementById('arrow_left_akcia');

let slide_akcia = document.getElementsByClassName('slide_akcia');
let slider_akcia_page = Math.ceil(slide_akcia.length/4);
let l = 0;
let movePer = 25.13;
let count_product = slide_akcia.length - 4;
let maxMover = count_product * movePer + 5;

let mob_view = window.matchMedia("(max-width: 1200px)");
	if (mob_view.matches)
	{
		movePer = 33.25;
		count_product = slide_akcia.length - 3;
		maxMover = count_product * movePer + 5;
	}
mob_view = window.matchMedia("(max-width: 776px)");
	if (mob_view.matches)
	{
		movePer = 50.25;
		count_product = slide_akcia.length - 2;
		maxMover = count_product * movePer + 5;
	}
	mob_view = window.matchMedia("(max-width: 480px)");
	if (mob_view.matches)
	{
		movePer = 93;
		count_product = slide_akcia.length - 1;
		maxMover = count_product * movePer + 5;
	}

let right_mover_akcia = () => {
	arrow_left_akcia.style.color = '#000000';
	l = l + movePer;
	if (slide_akcia == 1) {
		l = 0;
	}
	for	(const i of slide_akcia) {
		if (l > maxMover) {
			arrow_right_akcia.style.color = '#C4C4C4';
			l = l - movePer;
		}
		i.style.left = '-' + l + '%';
	}
}
let left_mover_akcia = () => {
	arrow_right_akcia.style.color = '#000000';
	l = l - movePer;
	if (l <= 0) {
			arrow_left_akcia.style.color = '#C4C4C4';
			l = 0;
		}
	for	(const i of slide_akcia) {
		if (slider_akcia_page > 1) {
			i.style.left = '-' + l + '%';
		}
	}
}
arrow_left_akcia.onclick = () => {
	left_mover_akcia();
}
arrow_right_akcia.onclick = () => {
	right_mover_akcia();
}

//  slider_Often_buy  //
let arrow_left_buy = document.getElementById('arrow_left_buy');
let arrow_right_buy = document.getElementById('arrow_right_buy');
let slide_buy = document.getElementsByClassName('slide_buy');
let slider_buy_page = Math.ceil(slide_buy.length/4);

let p = 0;
let movePer_buy = 25.13;
let count_product_buy = slide_buy.length - 4;
let maxMover_buy = count_product * movePer + 5;

let mob_view_buy = window.matchMedia("(max-width: 1200px)");
	if (mob_view_buy.matches)
	{
		movePer_buy = 33.25;
		count_product_buy = slide_buy.length - 3;
		maxMover_buy = count_product_buy * movePer_buy + 5;
	}
mob_view_buy = window.matchMedia("(max-width: 776px)");
	if (mob_view_buy.matches)
	{
		movePer_buy = 50.25;
		count_product_buy = slide_buy.length - 2;
		maxMover_buy = count_product_buy * movePer_buy + 5;
	}
mob_view_buy = window.matchMedia("(max-width: 480px)");
	if (mob_view_buy.matches)
	{
		movePer_buy = 93.25;
		count_product_buy = slide_buy.length - 1;
		maxMover_buy = count_product_buy * movePer_buy + 5;
	}


let right_mover_buy = () => {
	arrow_left_buy.style.color = "#000000";
	p = p + movePer_buy;
	if (slide_buy == 1) {
		p = 0;
	}
	for	(const j of slide_buy) {
		if (p > maxMover_buy) {
			arrow_right_buy.style.color = '#C4C4C4';
			p = p - movePer_buy;
		}
		j.style.left = '-' + p + '%';
	}
}
let left_mover_buy = () => {
	arrow_right_buy.style.color = '#000000';
	p = p - movePer_buy;
	if (p <= 0) {
			arrow_left_buy.style.color = '#C4C4C4';
			p = 0;
		}
	for	(const j of slide_buy) {
		if (slider_buy_page > 1) {
			j.style.left = '-' + p + '%';
		}
	}
}
arrow_left_buy.onclick = () => {
	left_mover_buy();
}
arrow_right_buy.onclick = () => {
	right_mover_buy();
}


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