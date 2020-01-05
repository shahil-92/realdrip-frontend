// import moment from 'moment';

export function myTimer(closingTime) {
	var newDate = new Date();
	var endTime = Date.parse(closingTime);
	var duration = Math.abs(endTime - newDate);
	return msToTime(duration);
}
export function msToTime(duration) {
	var seconds = parseInt((duration / 1000) % 60);
	var minutes = parseInt((duration / (1000 * 60)) % 60);
	var hours = parseInt((duration / (1000 * 60 * 60)) % 24);
	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	return hours + ' : ' + minutes + ': ' + seconds;
}

export function validateEmail(email) {
	var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return emailReg.test(String(email).toLowerCase());
}

export function ValidateNumber(str) {
	if (str === undefined || str === '' || str === null) {
		return '';
	}
	var reg = /^-?\d+\.?\d*$/;
	var result = reg.test(String(str));
	return result;
}

export function validateNum(str) {
	if (str === undefined || str === '' || str === null) {
		return '';
	}
	var pattern = /^\d+$/;
	return pattern.test(String(str));
}

export function getStringFirstCharacter(str) {
	if (str === undefined || str === '' || str === null) {
		return '';
	}
	return str.charAt(0);
}

export function isValidPassword(str) {
	return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}

export function getStringUpperCase(str) {
	if (str === undefined || str === '' || str === null) {
		return '';
	}
	return str.toUpperCase();
}

export function getLengthOfString(str) {
	if (str === undefined || str === '' || str === null) {
		return '';
	}
	return str.length;
}

export function getStarByLength(number) {
	let star = '';
	for (let i = 0; i < number; i++) {
		star = star + '*';
	}
	return star;
}

export function replaceCharacterWithStar(str) {
	let _length = getLengthOfString(str) - 1;
	let firstChar = getStringFirstCharacter(str);
	let firstCharWithUppercase = getStringUpperCase(firstChar);
	return firstCharWithUppercase + getStarByLength(_length);
}

export function isBlankOrEmpty(str) {
	return str === undefined || str === '';
}

export function isToster(isTost, isTostMessage) {
	var toster = isTost(isTostMessage, {
		position: 'top-right',
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true
	});
	return toster;
}

// export function changeDateFormat(date) {
// 	return moment(date).format('l');
// }

export async function getBase64Url(file) {
	var reader = new FileReader();
	reader.readAsDataURL(file);
	var base64Promise = new Promise(function(resolve) {
		reader.onload = (event) => {
			resolve(event.target.result);
		};
	});
	return base64Promise;
}

export function redirectTo(nextProps, pathname, Data) {
	nextProps.history.push({
		pathname: pathname,
		state: { detail: Data }
	});
}

export function onKeyPress(evt) {
	evt = evt ? evt : window.event;
	let charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
		evt.preventDefault();
	} else {
		return true;
	}
}

export function getImagePreviewByEnv(image) {
	if (process.env.NODE_ENV === 'development') {
		return image.preview;
	}
	var arr = image.preview.split('/');
	arr[2] = 'demo2.ongraph.com:3001';
	return arr[0] + '//' + arr[1] + arr[2] + '/' + arr[3];
}
export function handleLoginValidation(formErrors, name, value){
	switch(name){
		case 'email':
		  return formErrors.email = (validateEmail(value) ? '' : "please input correct mail")
		case 'password':
		  return formErrors.password = (value.length < 3 ? 'minimum length 5 is require' : '')
		default:
		return;
	  }
}