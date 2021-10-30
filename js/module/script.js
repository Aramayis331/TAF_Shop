// PRODUCTS CART //

let getLocalStorage = () => {
	let productsLocalStorage = localStorage.getItem('productsCart');
	if(productsLocalStorage !== null) {
		return JSON.parse(productsLocalStorage);
	}
	else {
		return [];
	}
}

let setLocalStorage = (id) => {
	let products = getLocalStorage();
	let pushProducts;
	pushProducts = true;

	products.forEach((el, i) => {
		if(el.id === id.id) {
			products.splice(i, 1);
			pushProducts = false;
		}
	})
	if(pushProducts === true) {
		products.push(id);
		pushProducts = true;
	}
		
	localStorage.setItem('productsCart', JSON.stringify(products));

	return {pushProducts, products};
}

let massivProductSliderAkcia = [
	{	
		name : 'Продукт 1',
		id : 1,
		count: 1,
		price : '200',
		priceProduct : '160',
		priceSkidka : '-20%',
		priceMinus : '-40',
		priceTotal : '160',
		img : 'images/slider_akcia1.webp'
	},
	{
		name : 'Продукт 2',
		id : 2,
		count: 1,
		price : '100',
		priceProduct : '70',
		priceSkidka : '-30%',
		priceMinus : '-30',
		priceTotal : '70',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'Продукт 3',
		id : 3,
		count: 1,
		price : '500',
		priceProduct : '250',
		priceSkidka : '-50%',
		priceMinus : '-250',
		priceTotal : '250',
		img : 'images/slider_akcia3.webp'
	},
	{
		name : 'Продукт 4',
		id : 4,
		count: 1,
		price : '90',
		priceProduct : '81',
		priceSkidka : '-10%',
		priceMinus : '-9',
		priceTotal : '81',
		img : 'images/slider_akcia4.webp'
	},
	{
		name : 'Продукт 5',
		id : 5,
		count: 1,
		price : '300',
		priceProduct : '165',
		priceSkidka : '-45%',
		priceMinus : '-135',
		priceTotal : '165',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'Продукт 6',
		id : 6,
		count: 1,
		price : '220',
		priceProduct : '88',
		priceSkidka : '-60%',
		priceMinus : '-132',
		priceTotal : '88',
		img : 'images/slider_akcia2.webp'
	}
]

let massivProductSliderBuy = [
	{	
		name : 'Продукт 7',
		id : 7,
		count: 1,
		price : '420',
		priceProduct : '252',
		priceSkidka : '-40%',
		priceMinus : '-168',
		priceTotal : '252',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'Продукт 8',
		id : 8,
		count: 1,
		price : '295',
		priceProduct : '236',
		priceSkidka : '-20%',
		priceMinus : '-59',
		priceTotal : '236',
		img : 'images/slider_akcia4.webp'
	},
	{
		name : 'Продукт 9',
		id : 9,
		count: 1,
		price : '95',
		priceProduct : '76',
		priceSkidka : '-20%',
		priceMinus : '-19',
		priceTotal : '76',
		img : 'images/slider_akcia1.webp'
	},
	{
		name : 'Продукт 10',
		id : 10,
		count: 1,
		price : '210',
		priceProduct : '147',
		priceSkidka : '-30%',
		priceMinus : '-63',
		priceTotal : '147',
		img : 'images/slider_akcia4.webp'
	},
	{
		name : 'Продукт 11',
		id : 11,
		count: 1,
		price : '350',
		priceProduct : '210',
		priceSkidka : '-40%',
		priceMinus : '-140',
		priceTotal : '210',
		img : 'images/slider_akcia2.webp'
	},
	{
		name : 'Продукт 12',
		id : 12,
		count: 1,
		price : '580',
		priceProduct : '116',
		priceSkidka : '-80%',
		priceMinus : '-464',
		priceTotal : '116',
		img : 'images/slider_akcia3.webp'
	},
	{
		name : 'Продукт 13',
		id : 13,
		count: 1,
		price : '385',
		priceProduct : '231',
		priceSkidka : '-40%',
		priceMinus : '-154',
		priceTotal : '231',
		img : 'images/slider_akcia1.webp'
	}
]


let classNameActive = 'products_element_btn_active';
let textNameActive = 'Убрать';
let textNameKupit = 'Купить';

// PRODUCTS HEART //

function getLocalSotrageHeart() {
	let getLocalSotrageHeart = localStorage.getItem('productsHeart');
	if(getLocalSotrageHeart !== null) {
		return JSON.parse(getLocalSotrageHeart);
	}
	else {
		return [];
	}
}


let classNameActiveHeart = 'icon_heart_active';


function ocenki() {
	let icon_ocenki = document.querySelectorAll('.icon_ocenki');

	icon_ocenki.forEach((el) => {
		el.addEventListener('click', () => {
			const { itemValue } = el.dataset;
			el.parentNode.dataset.totalValue = itemValue;
		})
	})
}


export  { massivProductSliderAkcia, massivProductSliderBuy,
		getLocalStorage, setLocalStorage, classNameActive, textNameActive, 
		textNameKupit, classNameActiveHeart, getLocalSotrageHeart, ocenki};
