'use client';

import Image from 'next/image';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Checkbox, FormControlLabel, Slider, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { passwordGeneratorFunc } from '@/utils/password-generator-func';
import { StrengthInterface } from '@/utils/Interfaces';

const Generator = () => {
	// Note we should be able to change this to a useRedecer because  this looks too rough buh that one nah later

	// password length state
	const [passwordLength, setPasswordLength] = useState<number>(10);
	// remove btn disabled status
	const [removeDisabled, setRemoveDisabled] = useState<boolean>(false);
	// add btn disabled status
	const [addDisabled, setAddDisabled] = useState<boolean>(false);
	// password strength
	const [passStrength, setPassStrength] = useState<
		'very-strong' | 'strong' | 'good' | 'weak'
	>('very-strong');
	// password parameters
	const [passParams, setPassParams] = useState<StrengthInterface>({
		uppercase: true,
		lowercase: true,
		integer: true,
		special: true,
	});
	// password gan gan
	const [password, setPassword] = useState(
		passwordGeneratorFunc(passwordLength, passParams)
	);
	const [copied, setCopied] = useState(false);

	// min and max length of password
	const MIN_LENGTH: number = 1;
	const MAX_LENGTH: number = 50;

	// generate and refresh password
	const handleGenerate = () => {
		// function to geme=nerate password
		setPassword(passwordGeneratorFunc(passwordLength, passParams));
	};

	// increase or decrease password length
	const handleLengthChange = (e: any, type: string) => {
		e.preventDefault();
		// handle slider change
		if (type === 'slide') {
			setPasswordLength(e.target.value);
		}

		// handle remove btn click
		if (type === 'remove') {
			setPasswordLength((prev) => {
				console.log(prev);
				return prev--;
			});
		}
		// handle add btn click
		if (type === 'add') {
			setPasswordLength(passwordLength + 1);
		}

		// console.log('----------');
		// console.log(type);
		// console.log(passwordLength);
		// console.log('----------');

		// check length to disable btn
		if (passwordLength + 1 === MIN_LENGTH) {
			setRemoveDisabled(true);
		}
		if (passwordLength + 1 >= MAX_LENGTH) {
			setAddDisabled(true);
		}

		// handle btn disable on btn click
		if (passwordLength + 1 < MAX_LENGTH) {
			setAddDisabled(false);
		}
		// handle btn disable on btn click
		if (passwordLength + 1 > MIN_LENGTH) {
			setRemoveDisabled(false);
		}

		// check length to change strength
		if (passwordLength + 1 <= 2) {
			setPassStrength('weak');
		} else if (passwordLength + 1 > 2 && passwordLength + 1 <= 5) {
			setPassStrength('good');
		} else if (passwordLength + 1 > 5 && passwordLength + 1 <= 8) {
			setPassStrength('strong');
		} else {
			setPassStrength('very-strong');
		}

		// generate password
		setPassword(passwordGeneratorFunc(passwordLength, passParams));
	};

	const handleCopy = () => {
		setCopied(true);
		navigator.clipboard.writeText(password);
		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	// func to slide img in on password length change
	const strengthImgFunc = (type: string) => ({
		transform: passStrength === type ? 'translateX(0)' : 'translateX(100%)',
	});

	return (
		<div className='generate-body'>
			<div className='strength-img-container'>
				<Image
					style={strengthImgFunc('very-strong')}
					src={'/assets/images/fortress.svg'}
					alt='password strength'
					width={0}
					height={0}
					className='strength-img'
				/>

				<Image
					style={strengthImgFunc('strong')}
					src={'/assets/images/strong.svg'}
					alt='password strength'
					width={0}
					height={0}
					className='strength-img'
				/>

				<Image
					style={strengthImgFunc('good')}
					src={'/assets/images/good.svg'}
					alt='password strength'
					width={0}
					height={0}
					className='strength-img'
				/>

				<Image
					style={strengthImgFunc('weak')}
					src={'/assets/images/weak.svg'}
					alt='password strength'
					width={0}
					height={0}
					className='strength-img'
				/>
			</div>
			<div className='generate-form-container'>
				<div className='generate-item first'>
					<div className='first-container'>
						<div className='input-container'>
							<input
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								value={password}
								type='text'
							/>
							<div className='input-container-actions'>
								<span onClick={handleCopy}>
									<Image
										src={
											copied
												? '/assets/icons/tick.svg'
												: '/assets/icons/copy.svg'
										}
										alt='copy'
										title={copied ? 'Copied' : 'Copy'}
										height={20}
										width={20}
										className='icon'
									/>
								</span>

								<span className='strength-tag'>
									{passStrength === 'very-strong'
										? 'very strong'
										: passStrength === 'strong'
										? 'strong'
										: passStrength === 'good'
										? 'good'
										: passStrength === 'weak'
										? 'weak'
										: null}
								</span>
								<RefreshIcon
									onClick={handleGenerate}
									className='icon'
								/>
							</div>
						</div>
						<button className='btn save-btn'>Save</button>
					</div>
				</div>
				<div className='generate-item second'>
					<div className='generate-label'>
						<span className='title-label'>Characters Used:</span>
					</div>
					<div className='generate-params check'>
						<FormControlLabel
							checked={passParams.uppercase}
							control={<Checkbox className='checkbox' />}
							className='label'
							label={<span className='label'>ABC</span>}
							onChange={() => {
								setPassParams((prev) => ({
									...prev,
									uppercase: !prev.uppercase,
								}));
								setPassword(
									passwordGeneratorFunc(
										passwordLength,
										passParams
									)
								);
							}}
						/>
						<FormControlLabel
							checked={passParams.lowercase}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>abc</span>}
							onChange={() => {
								setPassParams((prev) => ({
									...prev,
									lowercase: !prev.lowercase,
								}));
								setPassword(
									passwordGeneratorFunc(
										passwordLength,
										passParams
									)
								);
							}}
						/>
						<FormControlLabel
							checked={passParams.integer}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>123</span>}
							onChange={() => {
								setPassParams((prev) => ({
									...prev,
									integer: !prev.integer,
								}));
								setPassword(
									passwordGeneratorFunc(
										passwordLength,
										passParams
									)
								);
							}}
						/>
						<FormControlLabel
							checked={passParams.special}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>#$&</span>}
							onChange={() => {
								setPassParams((prev) => ({
									...prev,
									special: !prev.special,
								}));
								if(passParams.special){
									
								}
								setPassword(
									passwordGeneratorFunc(
										passwordLength,
										passParams
									)
								);
							}}
						/>
					</div>
				</div>
				<div className='generate-item third'>
					<div className='generate-label'>
						<span className='title-label'>Password Length:</span>
						<span className='title-label-ans'>
							{passwordLength}
						</span>
					</div>
					<div className='generate-params slider-container'>
						<Stack
							spacing={2}
							direction='row'
							sx={{ mb: 1 }}
							alignItems='center'>
							<button
								type='button'
								disabled={removeDisabled}
								className='slider-icon-container'
								onClick={(e) =>
									handleLengthChange(e, 'remove')
								}>
								<RemoveIcon className='slider-icon' />
							</button>

							<Slider
								aria-label='Password Length'
								size='small'
								valueLabelDisplay='auto'
								value={passwordLength}
								onChange={(e) => handleLengthChange(e, 'slide')}
								min={MIN_LENGTH}
								max={MAX_LENGTH}
								className='slider'
							/>
							<button
								type='button'
								disabled={addDisabled}
								className='slider-icon-container'
								onClick={(e) => handleLengthChange(e, 'add')}>
								<AddIcon className='slider-icon' />
							</button>
						</Stack>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Generator;
