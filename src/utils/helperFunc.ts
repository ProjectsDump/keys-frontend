import { StrengthInterface } from './Interfaces';
import { passwordGeneratorFunc } from './password-generator-func';

// min and max length of password
const MIN_LENGTH: number = 1;
const MAX_LENGTH: number = 50;

// copy generated password
export const handleCopy = (setCopied: Function, password: string) => {
	setCopied(true);
	navigator.clipboard.writeText(password);
	setTimeout(() => {
		setCopied(false);
	}, 3000);
};

// generate and refresh password
export const handleGenerate = (
	setPassword: Function,
	passwordLength: number,
	passParams: StrengthInterface
) => {
	// function to geme=nerate password
	setPassword(passwordGeneratorFunc(passwordLength, passParams));
};

// check length of password to change status
export const checkPasswordStrength = (
	passwordLength: number,
	setPassStrength: Function,
	setRemoveDisabled: Function,
	setAddDisabled: Function
) => {
	const validPasswordLength = passwordLength;

	// check length to change strength
	if (validPasswordLength <= 2) {
		setPassStrength('weak');
	} else if (validPasswordLength > 2 && validPasswordLength <= 5) {
		setPassStrength('good');
	} else if (validPasswordLength > 5 && validPasswordLength <= 8) {
		setPassStrength('strong');
	} else if (validPasswordLength > 8) {
		setPassStrength('very-strong');
	}

	// check length to disable btn
	if (validPasswordLength <= MIN_LENGTH) {
		setRemoveDisabled(true);
	}
	// handle btn enable on btn click
	else if (validPasswordLength < MAX_LENGTH) {
		setAddDisabled(false);
	}
	if (validPasswordLength >= MAX_LENGTH) {
		setAddDisabled(true);
	}
	// handle btn enable on btn click
	else if (validPasswordLength > MIN_LENGTH) {
		setRemoveDisabled(false);
	}
};

// change length of password on btn click
export const handleBtnClick = (
	type: string,
	setPasswordLength: Function,
) => {
	// handle remove btn click
	if (type === 'remove') {
		setPasswordLength((prev: number) => prev - 1);
	}
	// handle add btn click
	else if (type === 'add') {
		setPasswordLength((prev: number) => prev + 1);
	}
};

// handle slider
export const handleSlider = (
	e: any,
	setPasswordLength: Function,
	
) => {
	e.preventDefault();
	// handle slider change
	setPasswordLength(e.target.value);
};

export const strengthTag = (passStrength: string) => {
	return {
		backgroundColor:
			passStrength === 'very-strong'
				? '#43ed9c'
				: passStrength === 'strong'
				? 'lightblue'
				: passStrength === 'good'
				? 'orange'
				: passStrength === 'weak'
				? 'red'
				: 'lightblue',
	};
};
