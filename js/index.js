// SLIDER //

let counter = 1;

setInterval(function() {
	document.getElementById('radio' + counter).checked = true;
	counter++;
	if(counter > 4) {
		counter = 1;
	}
}, 5000);


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
let sigin = document.getElementById('sigin');
let sigin_nik = document.getElementById('sigin_nik');

let login_input_log = document.getElementById('login_input_log');
let password_input_logg = document.getElementById('password_input_log');

let btn_sign_in = document.getElementById('btn_sign_in');
let registracia_btn = document.getElementById('registracia_btn');

let full_name_input_reg = document.getElementById('full_name_input_reg');
let nik_input_reg = document.getElementById('nik_input_reg');
let login_input_reg = document.getElementById('login_input_reg');
let password_input_reg = document.getElementById('password_input_reg');
let password_povtor_input_reg = document.getElementById('password_povtor_input_reg');

let spasibo_reg = document.getElementById('spasibo_reg');
let parol_nesovpadaet = document.getElementById('parol_nesovpadaet');
let neverni_pass_log = document.getElementById('neverni_pass_log');

registracia_btn.addEventListener('click', function() {
	register = {
		'fullName' : full_name_input_reg.value,
		'nik' : nik_input_reg.value,
		'login' : login_input_reg.value,
		'password' : password_input_reg.value,
		'passwordRepeat' : password_povtor_input_reg.value
	}

		let i = localStorage.length;
		if(i <= localStorage.length) {
			let registerString = JSON.stringify(register);
			localStorage.setItem('test' + i, registerString);
		}
		if (password_input_reg.value != password_povtor_input_reg.value){
			spasibo_reg.style.display = 'none';
			parol_nesovpadaet.style.display = 'block';
		}else {
			spasibo_reg.style.display = 'block';
			parol_nesovpadaet.style.display = 'none';

			full_name_input_reg.value = '';
			nik_input_reg.value = '';
			login_input_reg.value = '';
			password_input_reg.value = '';
			password_povtor_input_reg.value = '';
		}
}) 

btn_sign_in.addEventListener('click', function() {
	for(let j = 0;j <= localStorage.length; j++) {
		if(localStorage.key(j) !== null) {
			let getStorage = localStorage.getItem(localStorage.key(j))
			let getObject = JSON.parse(getStorage);
			if((login_input_log.value === getObject.login) && (password_input_logg.value === getObject.password)) {
				neverni_pass_log.style.display = 'none';
				sigin.style.display = 'none';
				sigin_nik.innerHTML = getObject.nik;
				sigin_nik.style.display = 'block';
				break;
			}
			
		}
		else {
			neverni_pass_log.style.display = 'block'
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