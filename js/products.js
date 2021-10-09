let massivProductSliderAkcia = [
	{	
		id : 'el1',
		desc1 : 'Есть в наличии',
		desc2 : 'Мідії мариновані в олії з лимоном',
		price : '189. UAH',
		discountprice : '243 UAH',
		img : 'images/slider_akcia1.webp'
	},
	{
		id : 'el2',
		name : 'Помидор',
		price : '20',
		img : 'images/slider_akcia2.webp'
	},
	{
		id : 'el3',
		name : 'Ананас',
		price : '30',
		img : 'images/slider_akcia3.webp'
	},
	{
		id : 'el4',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia4.webp'
	},
	{
		id : 'el5',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia2.webp'
	},
	{
		id : 'el6',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia2.webp'
	}
]

let htmlCatalogSliderAkcia = '';

massivProductSliderAkcia.forEach(({id, name, price, img }) => {
	
	htmlCatalogSliderAkcia += `
	
		<div class="sliders">
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
					<button class="btn_footer_slider_akcia" type="submit">Купить</button>
				</div>
			</div>
		</div>
	
	`;

	document.getElementById('slider_akcia').innerHTML = htmlCatalogSliderAkcia;
});

let massivProductSliderBuy = [
	{	
		id : 'el1',
		desc1 : 'Есть в наличии',
		desc2 : 'Мідії мариновані в олії з лимоном',
		price : '189. UAH',
		discountprice : '243 UAH',
		img : 'images/slider_akcia2.webp'
	},
	{
		id : 'el2',
		name : 'Помидор',
		price : '20',
		img : 'images/slider_akcia4.webp'
	},
	{
		id : 'el3',
		name : 'Ананас',
		price : '30',
		img : 'images/slider_akcia1.webp'
	},
	{
		id : 'el4',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia4.webp'
	},
	{
		id : 'el5',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia2.webp'
	},
	{
		id : 'el6',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia3.webp'
	},
	{
		id : 'el7',
		name : 'Киви',
		price : '40',
		img : 'images/slider_akcia1.webp'
	}
]

let htmlCatalogSliderBuy = '';

massivProductSliderBuy.forEach(({id, name, price, img }) => {
	
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
					<button class="btn_footer_slider_akcia" type="submit">Купить</button>
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