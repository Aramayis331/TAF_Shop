import {massivProductSliderAkcia, massivProductSliderBuy, classNameActiveHeart, getLocalSotrageHeart} from './module/script.js';


function setLocalStorageHeart(elInProducts) {
	let productsHeart = getLocalSotrageHeart();
	let pushProductHeart = true;

	productsHeart.forEach((el, i) => {
		if(el.id === elInProducts.id) {
			productsHeart.splice(i, 1);
			pushProductHeart = false;
		}
	})
	if(pushProductHeart === true) {
		productsHeart.push(elInProducts);
		pushProductHeart = true;
	}

	localStorage.setItem('productsHeart', JSON.stringify(productsHeart));
	return {pushProductHeart, productsHeart}
}

function btnAddLocalStorajeHeart() {
	let div_btn_heart = document.querySelectorAll('.div_btn_heart');
	let icon_heart = document.querySelectorAll('.icon_heart');

	div_btn_heart.forEach((el, i) => {
		el.addEventListener('click', () => {
			let {pushProductHeart, productsHeart} = setLocalStorageHeart(massivProductSliderAkcia[i]);
			if(pushProductHeart) {
				icon_heart[i].classList.add(classNameActiveHeart);
			}else {
				icon_heart[i].classList.remove(classNameActiveHeart);
			}
			countHeart();
		})
	})
}
btnAddLocalStorajeHeart()

function btnAddLocalStorajeHeartBuy() {
	let div_btn_heart_buy = document.querySelectorAll('.div_btn_heart_buy');
	let icon_heart_buy = document.querySelectorAll('.icon_heart_buy');

	div_btn_heart_buy.forEach((el, i) => {
		el.addEventListener('click', () => {
			let {pushProductHeart, productsHeart} = setLocalStorageHeart(massivProductSliderBuy[i]);

			if(pushProductHeart) {
				icon_heart_buy[i].classList.add(classNameActiveHeart);
			}else {
				icon_heart_buy[i].classList.remove(classNameActiveHeart);
			}
			countHeart();
		});
	});
}
btnAddLocalStorajeHeartBuy();

function countHeart() {
	let number_like = document.getElementById('number_like');
	if(number_like) {
		let countHeart = getLocalSotrageHeart().length;
		return	number_like.innerHTML = countHeart;
	}
}
countHeart();