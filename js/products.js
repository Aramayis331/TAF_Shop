let massivProductSliderAkcia = [
	{	
		name : 'fish 1',
		priceTotal : '200',
		priceSkidka : '-20%',
		priceMinus : '-40',
		price : '160',
		img : 'images/slider_akcia1.webp'
	},
	{
		name : 'fish 2',
		priceTotal : '100',
		priceSkidka : '-30%',
		priceMinus : '-30',
		price : '70',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'fish 3',
		priceTotal : '500',
		priceSkidka : '-50%',
		priceMinus : '-250',
		price : '250',
		img : 'images/slider_akcia3.webp'
	},
	{
		name : 'fish 4',
		priceTotal : '90',
		priceSkidka : '-10%',
		priceMinus : '-9',
		price : '81',
		img : 'images/slider_akcia4.webp'
	},
	{
		name : 'fish 5',
		priceTotal : '300',
		priceSkidka : '-45%',
		priceMinus : '-135',
		price : '165',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'fish 6',
		priceTotal : '220',
		priceSkidka : '-60%',
		priceMinus : '-132',
		price : '88',
		img : 'images/slider_akcia2.webp'
	}
]

getLocalStorage = () => {
	let productsLocalStorage = localStorage.getItem('products');
	if(productsLocalStorage !== null) {
		return JSON.parse(productsLocalStorage);
	}
	else {
		return [];
	}
}

let htmlCatalogSliderAkcia = '';
let classNameActive = 'products_element_btn_active';
let textNameActive = 'Убрать';
let textNameKupit = 'Купить';


massivProductSliderAkcia.forEach(({img, name, price, priceTotal, priceSkidka, priceMinus}) => {
	let activClass = '';
	let activText = '';
	let objectProductsStore = getLocalStorage();

	if(objectProductsStore.indexOf(name) === -1) {
		activClass = ' ';
		activText = textNameKupit;
	}else {
		activClass = ' ' + classNameActive;
		activText = textNameActive;
	}



	htmlCatalogSliderAkcia += `
	
		<div class="sliders">
			<div class="slide_akcia">
				<div class="header_slider_akcia">
					<div class="cena_procent">
						<p class="grn">${priceMinus} руб</p>
						<p class="procent">${priceSkidka}</p> 
					</div>
						<i class="fas fa-heart"></i>
				</div>
				<div class="articl_slider_akcia">
					<img class="articl_slider_akcia_img" src="${img}" alt="no photo">
					<div class="slider_akcia_te">
						<p class="articl_p1">Есть в наличии</p>
						<p class="articl_p2">Мідії мариновані в олії з лимоном</p>
					</div>
				</div>
				<div class="ocenka_slider_akcia"> 
					<div class="ocenki">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
					<div class="comment_slider_akcia">
						<i class="far fa-comment-dots"></i>
						<p>0</p>
					</div>
				</div>
				<div class="footer_slider_akcia">
					<div class="cena_producta_div">
						<p class="cena_product">${priceTotal} руб</p>
						<p class="skidka_product">${price} руб</p>
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

let massivProductSliderBuy = [
	{	
		img : 'images/slider_akcia2.webp'
	},
	{
		img : 'images/slider_akcia4.webp'
	},
	{
		img : 'images/slider_akcia1.webp'
	},
	{
		img : 'images/slider_akcia4.webp'
	},
	{
		img : 'images/slider_akcia2.webp'
	},
	{
		img : 'images/slider_akcia3.webp'
	},
	{
		img : 'images/slider_akcia1.webp'
	}
]


let htmlCatalogSliderBuy = '';

massivProductSliderBuy.forEach(({img}) => {
	
	htmlCatalogSliderBuy += `
	
		<div class="sliders_buy">
			<div class="slide_akcia">
				<div class="header_slider_akcia">
					<div class="cena_procent">
						<p class="grn">-53 грн</p>
						<p class="procent">-20%</p> 
					</div>
						<i class="fas fa-heart"></i>
				</div>
				<div class="articl_slider_akcia">
					<img class="articl_slider_akcia_img" src="${img}" alt="no photo">
					<div class="slider_akcia_te">
						<p class="articl_p1">Есть в наличии</p>
						<p class="articl_p2">Мідії мариновані в олії з лимоном</p>
					</div>
				</div>
				<div class="ocenka_slider_akcia"> 
					<div class="ocenki">
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
						<i class="fas fa-star"></i>
					</div>
					<div class="comment_slider_akcia">
						<i class="far fa-comment-dots"></i>
						<p>0</p>
					</div>
				</div>
				<div class="footer_slider_akcia">
					<div class="cena_producta_div">
						<p class="cena_product">243 UAH</p>
						<p class="skidka_product">189.9 UAH</p>
					</div>
					<div class="div_btn_kupit">
						<button class="btn_footer_slider_akcia" type="submit">Купить</button>
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