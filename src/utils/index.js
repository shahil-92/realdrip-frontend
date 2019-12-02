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

export function validatePasswordInPersonalInfo(data) {
	if (
		data[0].value === undefined ||
		data[1].value === undefined ||
		data[2].value === undefined ||
		data[0].value === '' ||
		data[1].value === '' ||
		data[2].value === ''
	) {
		return {
			status: false,
			message: 'Please fill all required fields'
		};
	}
	if (!isValidPassword(data[1].value)) {
		return {
			status: false,
			message: 'Please enter passowrd in correct format'
		};
	}
	if (data[1].value !== data[2].value) {
		return {
			status: false,
			message: "Password doesn't match"
		};
	}
	return { status: true, message: null };
}

export function isValidPassword(str) {
	return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(str);
}

export function isValidSignupForm(str) {
	if (
		str.email.trim() === '' ||
		str.password1.trim() === '' ||
		str.password2.trim() === '' ||
		str.companyName.trim() === '' ||
		str.user_type === ''
	) {
		return {
			status: false,
			message: 'Please fill all the mandatory fields'
		};
	}
	if (!validateEmail(str.email)) {
		return {
			status: false,
			message: 'Please Fill Correct Email'
		};
	}
	if (!isValidPassword(str.password1)) {
		return {
			status: false,
			message: 'Please enter valid password'
		};
	}
	if (str.password1 !== str.password2) {
		return {
			status: false,
			message: "Password doesn't match"
		};
	}
	if (getLengthOfString(str.bluebook) > 3) {
		return {
			status: false,
			message: 'Bluebook score cannot be greater than 3 digits'
		};
	}
	if (getLengthOfString(str.pincode) > 5) {
		return {
			status: false,
			message: 'Zipcode cannot be greater than 6 digits'
		};
	}
	if (str.phone !== '' && getLengthOfString(str.phone) !== 12) {
		return {
			status: false,
			message: 'Phone number should be upto 10 digit'
		};
	}
	return { status: true, message: null };
}

export function isValidAddProductForm(data) {
	if (
		data.name.trim() === '' ||
		data.delivery_method === '' ||
		data.quantity.trim() === '' ||
		data.starting_bid_price.trim() === '' ||
		data.start_time === '' ||
		data.end_time === '' ||
		data.categories_id === '' ||
		data.country_of_origin === '' ||
		data.pack === '' ||
		data.pallet === '' ||
		data.grade.trim() === '' ||
		data.size === ''
	) {
		return {
			status: false,
			message: 'Please fill all mandatory fields'
		};
	} else if (
		typeof data.start_time === 'string' ||
		typeof data.end_time === 'string' ||
		typeof data.expiration_date === 'string'
	) {
		return {
			status: false,
			message: 'Please fill date correctly in YYYY-MM-DD HH:MM AM/PM format'
		};
	} else {
		return { status: true, message: null };
	}
}
export function isValidAddRequestForm(data) {
	if (
		data.name === '' ||
		data.delivery_method === '' ||
		data.quantity === '' ||
		data.categories_id === '' ||
		data.pack === '' ||
		data.variety === '' ||
		data.grade === '' ||
		data.size === ''
	) {
		return {
			status: false,
			message: 'Please fill all mandatory fields'
		};
	} else {
		return { status: true, message: null };
	}
}
export function isValidEditProductForm(data) {
	if (data.end_time === '') {
		return {
			status: false,
			message: 'Start time cannot be beyond end time'
		};
	} else {
		return { status: true, message: null };
	}
}

export function isValidLoginForm(data) {
	if (data.email.trim() === '' && data.password.trim() === '') {
		return { status: false, message: 'Please fill the email and password' };
	}
	if (!validateEmail(data.email) && !isValidPassword(data.password)) {
		return { status: false, message: 'Please fill the correct email and password' };
	}
	return { status: true, message: null };
}

export function isValidContactForm(data) {
	if (data.first_name === undefined || data.last_name === undefined || data.email === undefined) {
		return { status: false, message: 'Please fill all the mandatory fields' };
	}
	if (!validateEmail(data.email)) {
		return { status: false, message: 'Please fill the correct email' };
	}
	// if (data.phone_namber !== '' && getLengthOfString(data.phone_namber) !== 12) {
	//   return {
	//     status: false,
	//     message: "Phone number should be upto 10 digit"
	//   }
	// }
	return { status: true, message: null };
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

export function isResetPasswordForm(data) {
	if (data.password === '' && data.confirmPassword === '') {
		return { status: false, message: 'Please fill the Password and Confirm Password' };
	}
	if (!isValidPassword(data.password)) {
		return {
			status: false,
			message: 'Must contain password of length 8 with One Uppercase,Lowercase & special Character'
		};
	}
	if (data.password !== data.confirmPassword) {
		return { status: false, message: "Password doesn't match" };
	}
	return { status: true, message: null };
}

export function getImagePreviewByEnv(image) {
	if (process.env.NODE_ENV === 'development') {
		return image.preview;
	}
	var arr = image.preview.split('/');
	arr[2] = 'demo2.ongraph.com:3001';
	return arr[0] + '//' + arr[1] + arr[2] + '/' + arr[3];
}
