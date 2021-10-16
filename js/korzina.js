import { massivProductSliderAkcia, massivProductSliderBuy, getLocalStorage, setLocalStorage, classNameActive, 
		textNameActive, textNameKupit} from './module/script.js';


let div_btn_kupit = document.querySelectorAll('.div_btn_kupit');
let btn_footer_slider_akcia = document.querySelectorAll('.btn_footer_slider_akcia');

div_btn_kupit.forEach((el, i) => {
	el.addEventListener('click', () => {
	let {pushProducts, products} = setLocalStorage(massivProductSliderAkcia[i]);
		if(pushProducts) {
			btn_footer_slider_akcia[i].classList.add(classNameActive);
			btn_footer_slider_akcia[i].innerHTML = textNameActive;
			textNameActive;
		} else {
			btn_footer_slider_akcia[i].classList.remove(classNameActive);
			btn_footer_slider_akcia[i].innerHTML = textNameKupit;
		}
		countKorzina();
	});
})


let numberKorzina = document.getElementById('number_basket');
let countKorzina = () => {
	if(numberKorzina) {
		let countKorzina = getLocalStorage().length;
		return numberKorzina.innerHTML = countKorzina;
	}
}
countKorzina();

let products_korzina = document.getElementById('products_korzina')
let containerCart = () => {
	if(products_korzina) {
		let getLocalStorageCart = localStorage.getItem('products');
		let objectGetLocalStorageCart = JSON.parse(getLocalStorageCart);
	if(objectGetLocalStorageCart.length > 0) {
	let containerCart = '';
	objectGetLocalStorageCart.map(({img, name, priceTotal, priceProduct, count}) => {
		containerCart += `
		<div class="row container_korzina">
			<div class="col-5">
				<div class='div_products_img_name'>
					<div class='div_remove_product'><i class="fas fa-times-circle"></i></div>
					<div class='div_products_img_korzina'>
						<img class='products_img_korzina' src='${img}'>
					</div>
					<p class='name_product_korzina'>${name}</p>
				</div>
			</div>
			<div class="col-2">
					<div class='div_products_price'>
						<p class='price_product_korzina'>${priceProduct}</p>
					</div>
			</div>
			<div class="col-2">
				<div class='div_products_count'>
					<div class='arrow_left'><i class="fas fa-chevron-circle-left"></i></div>
						<p class='count_product'>${count}</p>
					<div class='arrow_right'><i class="fas fa-chevron-circle-right"></i></div>
				</div>
			</div>
			<div class="col-3">
				<div class='div_products_total'>
					<p class='total_product'>${priceTotal}</p>
				</div>
			</div>
		</div>
		`;
		products_korzina.innerHTML = containerCart;
	})
	}
	else {
		containerCart = `
			<div class='empty_cart'>
				<p class='empty_cart_text'>Ваша корзина пуста</p>
			</div>
		`
		products_korzina.innerHTML = containerCart;
	}
	}
	productInCart();
}
containerCart();



function productInCart() {
	let arrowLeft = document.querySelectorAll('.arrow_left');
	let arrowRight = document.querySelectorAll('.arrow_right');
	let divRemoveProduct = document.querySelectorAll('.div_remove_product');
	let productInCart = getLocalStorage();

	arrowRight.forEach((el, i) => {
		el.addEventListener('click', () => {
			if(arrowRight) {
				productInCart[i].count += 1;
				productInCart[i].priceTotal = productInCart[i].priceProduct * productInCart[i].count;
			}
			localStorage.setItem('products', JSON.stringify(productInCart));
			containerCart();
		})
	})
	arrowLeft.forEach((el, i) => {
		el.addEventListener('click', () => {
			if(arrowLeft && (productInCart[i].count > 1)) {
				productInCart[i].count -= 1;
				productInCart[i].priceTotal = productInCart[i].priceProduct * productInCart[i].count;
			}
			else {
				productInCart.splice(i, 1);
			}
			localStorage.setItem('products', JSON.stringify(productInCart));
			containerCart();
		})
	})
	divRemoveProduct.forEach((el, i) => {
		el.addEventListener('click', () => {
			productInCart.splice(i, 1);
			
			localStorage.setItem('products', JSON.stringify(productInCart));
			containerCart();
			
		})
	})
	
}

productInCart();