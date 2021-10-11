let getLocalStorage = () => {
	let productsLocalStorage = localStorage.getItem('products');
	if(productsLocalStorage !== null) {
		return JSON.parse(productsLocalStorage);
	}
	else {
		return [];
	}
}

let a = getLocalStorage();
let setLocalStorage = (id) => {
	let products = a;
	let pushProducts = false;
	a.forEach((el, i) => {
		if(id.name === el.name) {
			products.splice(i, 1);
		}else {
			// products.push(id);
		}
	})
	localStorage.setItem('products', JSON.stringify(products));

	return {pushProducts, products};
}

// let setLocalStorage = (id) => {
// 	let products = a;
// 	let pushProducts = false;
// 	let index = products.indexOf(id);
// 	if(index === -1) {
// 		products.push(id);
// 		pushProducts = true;
// 	}
// 	else {
// 		products.splice(index, 1);
// 	}

// 	localStorage.setItem('products', JSON.stringify(products));

// 	return {pushProducts, products};
// }

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
		
		let containerCart = '';
	objectGetLocalStorageCart.map(({img, name, price}) => {

		containerCart += `
		<div class="row container_korzina">
			<div class="col-5">
				<div class='div_products_img_name'>
					<i class="fas fa-times-circle"></i>
					<div class='div_products_img_korzina'>
						<img class='products_img_korzina' src='${img}'>
					</div>
					<p class='name_product_korzina'>${name}</p>
				</div>
			</div>
			<div class="col-2">
					<div class='div_products_price'>
						<p class='price_product_korzina'>${price}</p>
					</div>
			</div>
			<div class="col-2">
				<div class='div_products_count'>
					<i class="fas fa-chevron-circle-left"></i>
						<p class='count_product'>1</p>
					<i class="fas fa-chevron-circle-right"></i>
				</div>
			</div>
			<div class="col-3">
				<div class='div_products_total'>
					<p class='total_product'>0</p>
				</div>
			</div>
		</div>
		`;
		products_korzina.innerHTML = containerCart;
	})	
	}
}
containerCart();