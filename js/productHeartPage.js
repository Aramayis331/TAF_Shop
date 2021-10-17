import {getLocalSotrageHeart} from './module/script.js';

function containerHeart() {
	let pageHeartGetLocalStorage = getLocalSotrageHeart();
	
	if(pageHeartGetLocalStorage.length > 0) {
		let containerHeart = '';
		pageHeartGetLocalStorage.map(({img, name, priceSkidka, priceProduct}) => {

			containerHeart += `
		
			<div class='row container_heart'>
				<div class='col-1'>
					<div class='div_remove_product_heart'>
						<i class="fas fa-times-circle icon_remove_product_heart"></i>
					</div>
				</div>
				<div class='col-3'>
					<div class='div_img_product'>
						<img src='../${img}'>
					</div>
				</div>
				<div class='col-3'>
					<div class='div_name_product'>
						<p>${name}</p>
					</div>	
				</div>
				<div class='col-2'>
					<div class='div_skidka_product'>
						<p>${priceSkidka}</p>
					</div>
				</div>
				<div class='col-3'>
					<div class='div_total_product'>
						<p>${priceProduct}руб</p>
					</div>
				</div>
			</div>
		
			`
	
			document.getElementById('products_heart').innerHTML = containerHeart;
		})
	} else {
		containerHeart = `
		
				<div class='empty_heart'>
					<p class='empty_heart_text'>Пустой</p>
				</div>

			`

			document.getElementById('products_heart').innerHTML = containerHeart;
		}
		removeProductHeart();
}
containerHeart();

function removeProductHeart() {
	let icon_remove_product_heart = document.querySelectorAll('.icon_remove_product_heart');
	let getArrayHeartLocalStorage = getLocalSotrageHeart();

	icon_remove_product_heart.forEach((el, i) => {
		el.addEventListener('click', () => {
			getArrayHeartLocalStorage.splice(i, 1);

			localStorage.setItem('productsHeart', JSON.stringify(getArrayHeartLocalStorage));
			containerHeart();
		})
	});


}
removeProductHeart();