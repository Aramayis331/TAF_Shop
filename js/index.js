import {ocenki} from './module/script.js'

// SLIDER //

let counter = 1;

setInterval(function() {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4) {
		counter = 1;
	}
}, 5000);


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


// eye  //
let eye_span = document.querySelectorAll('.eye_span');
let password_input_log = document.querySelectorAll('.password_input');

if(eye_span && password_input_log) {
	eye_span.forEach((el, i) => {
		el.addEventListener('click', () => {
			if(password_input_log[i].type === 'password') {
				password_input_log[i].type = "text";
				el.querySelector('.hide1').style.display = 'block';
				el.querySelector('.hide2').style.display = 'none';
			}
			else {
				password_input_log[i].type = 'password';
				el.querySelector('.hide1').style.display = 'none';
				el.querySelector('.hide2').style.display = 'block';
			}
		})
	})
}


//  Loin Registracia  //
let login_input_log = document.getElementById('login_input_log');
let password_input_logg = document.getElementById('password_input_log');

let btn_sign_in = document.getElementById('btn_sign_in');
let registracia_btn = document.getElementById('registracia_btn');

let full_name_input_reg = document.getElementById('full_name_input_reg');
let nik_input_reg = document.getElementById('nik_input_reg');
let login_input_reg = document.getElementById('login_input_reg');
let password_input_reg = document.getElementById('password_input_reg');
let password_povtor_input_reg = document.getElementById('password_povtor_input_reg');


registracia_btn.addEventListener('click', function() {
	let register = {
		'fullName' : full_name_input_reg.value,
		'nik' : nik_input_reg.value,
		'login' : login_input_reg.value,
		'password' : password_input_reg.value,
		'passwordRepeat' : password_povtor_input_reg.value
	}

	let i = localStorage.length;
	if((i <= localStorage.length) && (password_input_reg.value === password_povtor_input_reg.value)) {
		for(let n = 0; n <= localStorage.length; n++) {
			if(localStorage.key(n) !== null) {
				let getStorage_nik = localStorage.getItem(localStorage.key(n));
				let getObject_nik = JSON.parse(getStorage_nik);
				if(register.nik === getObject_nik.nik) {
					document.getElementById('eror_text_reg').innerHTML = 'Уже есть такой никнейм';
					return;
				}
			}		
		}			
		
		if(full_name_input_reg.value !== '' && nik_input_reg.value !== '' && login_input_reg.value !== '' && password_input_reg.value !== '' && password_povtor_input_reg.value !== '') {
			let registerString = JSON.stringify(register);
			localStorage.setItem('test' + i, registerString);
			document.getElementById('eror_text_reg').innerHTML = 'Спасибо за регистрацию.Попробуйте войти сейчас.';
			
			full_name_input_reg.value = '';
			nik_input_reg.value = '';
			login_input_reg.value = '';
			password_input_reg.value = '';
			password_povtor_input_reg.value = '';
		}
		else {
			document.getElementById('eror_text_reg').innerHTML = 'Пустые поля';
		}
	}else {
		document.getElementById('eror_text_reg').innerHTML = 'Пароль не совпадает с повторным вводом пароля.';
	}
}) 

btn_sign_in.addEventListener('click', function() {
	for(let j = 0;j <= localStorage.length; j++) {
		if(localStorage.key(j) !== null) {
			let getStorage = localStorage.getItem(localStorage.key(j))
			let getObject = JSON.parse(getStorage);
			if((login_input_log.value === getObject.login) && (password_input_logg.value === getObject.password)) {
				document.getElementById('sigin_navbar').innerHTML = getObject.nik;
				document.getElementById('icon_div_sigin').style.display = 'none';
				document.getElementById('sigin_nik_header').innerHTML = getObject.nik;
				document.getElementById('icon_sigin_nik').style.display = 'block';

				$('#modalLogin').modal('hide');
				break;
			}
			
		}
		else {
			document.getElementById('eror_text_log').innerHTML = 'Неверный логин или пароль.';
			login_input_log.value = '';
			password_input_logg.value = '';
			break;
		}
	}
})

let myModal1 = new bootstrap.Modal(document.getElementById('modalLogin'), {
	keyboard: false,
	backdrop: 'static'
})
let myModal2 = new bootstrap.Modal(document.getElementById('modalRegistr'), {
	keyboard: false,
	backdrop: 'static'
})

ocenki();