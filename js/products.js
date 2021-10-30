import {massivProductSliderAkcia, massivProductSliderBuy, getLocalStorage, getLocalSotrageHeart, 
		classNameActive, textNameActive, textNameKupit, classNameActiveHeart, ocenki} from './module/script.js';



let activClass = '';
let activText = '';
function activBuy(el) {
	let activTrue = true;
	
	let objectProductsStore = getLocalStorage();
	for(let k = 0; k < objectProductsStore.length; k++) {
		if(el.id ===  objectProductsStore[k].id) {
			activClass = ' ' + classNameActive;
			activText = textNameActive;
			activTrue = false;
		}
	}
	if(activTrue === true) {
		activClass = ' ';
		activText = textNameKupit;
	}
}

let activClassHeart = ' ';
function activeHeart(el) {
	let objectLocalStorajeHeart = getLocalSotrageHeart();
	let activeTrueHeart = true;
	
	for(let l = 0; l < objectLocalStorajeHeart.length; l++) {
		if(el.id === objectLocalStorajeHeart[l].id) {
			activClassHeart = ' ' + classNameActiveHeart;
			activeTrueHeart = false;
		}
	}
	if(activeTrueHeart === true) {
		activClassHeart = ' ';
	}

}

let htmlCatalogSliderAkcia = '';
massivProductSliderAkcia.forEach((el) => {

	activBuy(el);
	activeHeart(el);



	htmlCatalogSliderAkcia += `
	
		<div class="sliders">
			<div class="slide_akcia">
				<div class="header_slider_akcia">
					<div class="cena_procent">
						<div class='div_grn'>
							<p class="grn">${el.priceMinus} руб</p>
						</div>
						<div class='div_procent'>
							<p class='procent'>${el.priceSkidka}</p> 	
						</div>
					</div>
						<div class="div_btn_heart"><i class="fas fa-heart icon_heart${activClassHeart}"></i></div>
				</div>
				<div class="articl_slider_akcia">
					<img class="articl_slider_akcia_img" src="${el.img}" alt="no photo">
					<div class="slider_akcia_te">
						<div class='div_articl_p1'>
							<p class="articl_p1">Есть в наличии</p>
						</div>
						<p class="articl_p2">Мідії мариновані в олії з лимоном</p>
					</div>
				</div>
				<div class="ocenka_slider_akcia"> 
					<div class="ocenki" data-total-value="0">
						<i class="fas fa-star icon_ocenki" data-item-value="5"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="4"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="3"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="2"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="1"></i>
					</div>
					<div class="comment_slider_akcia">
						<i class="far fa-comment-dots"></i>
						<p>0</p>
					</div>
				</div>
				<div class="footer_slider_akcia">
					<div class="cena_producta_div">
						<p class="cena_product">${el.price} руб</p>
						<p class="skidka_product">${el.priceProduct} руб</p>
					</div>
					<div class="div_btn_kupit">
						<button class="btn_footer_slider_akcia${activClass}" type="submit">${activText}</button>
					</div>
				</div>
			</div>
		</div>
	
	`;

	document.getElementById('slider_akcia').innerHTML = htmlCatalogSliderAkcia;
});


let htmlCatalogSliderBuy = '';
massivProductSliderBuy.forEach((el) => {

	activBuy(el);
	activeHeart(el);

	htmlCatalogSliderBuy += `
	
		<div class="sliders_buy">
			<div class="slide_akcia">
				<div class="header_slider_akcia">
					<div class="cena_procent">
						<div class='div_grn'>
							<p class='grn'>${el.priceMinus} руб</p>
						</div>
						<div class='div_procent'>
							<p class="procent">${el.priceSkidka}</p> 
						</div>	
					</div>
					<div class="div_btn_heart_buy">
						<i class="fas fa-heart icon_heart_buy${activClassHeart}"></i>
					</div>
				</div>
				<div class="articl_slider_akcia">
				<img class="articl_slider_akcia_img" src="${el.img}" alt="no photo">
					<div class="slider_akcia_te">
						<div class='div_articl_p1'>
							<p class="articl_p1">Есть в наличии</p>
						</div>
						<p class="articl_p2">Мідії мариновані в олії з лимоном</p>
					</div>
				</div>
				<div class="ocenka_slider_akcia"> 
					<div class="ocenki" data-total-value="0">
						<i class="fas fa-star icon_ocenki" data-item-value="5"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="4"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="3"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="2"></i>
						<i class="fas fa-star icon_ocenki" data-item-value="1"></i>
					</div>
					<div class="comment_slider_akcia">
						<i class="far fa-comment-dots"></i>
						<p>0</p>
					</div>
				</div>
				<div class="footer_slider_akcia">
					<div class="cena_producta_div">
						<p class="cena_product">${el.price} руб</p>
						<p class="skidka_product">${el.priceProduct} руб</p>
					</div>
					<div class="div_btn_kupit_buy">
						<button class="btn_footer_slider_buy${activClass}" type="submit">${activText}</button>
					</div>
				</div>
			</div>
		</div>
	
	`;

	document.getElementById('slider_buy').innerHTML = htmlCatalogSliderBuy;
});

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
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 992,
		settings: {
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 481,
		settings: {
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
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 992,
		settings: {
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 768,
		settings: {
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 481,
		settings: {
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});


ocenki();
