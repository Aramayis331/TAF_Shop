let getLocalStorage = () => {
	let productsLocalStorage = localStorage.getItem('products');
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
		
	localStorage.setItem('products', JSON.stringify(products));

	return {pushProducts, products};
}

let massivProductSliderAkcia = [
	{	
		name : 'Product 1',
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
		name : 'Product 2',
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
		name : 'Product 3',
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
		name : 'Product 4',
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
		name : 'Product 5',
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
		name : 'Product 6',
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


let classNameActive = 'products_element_btn_active';
let textNameActive = 'Убрать';
let textNameKupit = 'Купить';


export  { massivProductSliderAkcia, massivProductSliderBuy,
		getLocalStorage, setLocalStorage, classNameActive, textNameActive, 
		textNameKupit};
