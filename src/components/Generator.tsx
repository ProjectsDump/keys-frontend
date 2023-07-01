'use client';

import Image from 'next/image';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Checkbox, FormControlLabel, Slider, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

const Generator = () => {
	const [passwordLength, setPasswordLength] = useState(10);
	const [removeDisabled, setRemoveDisabled] = useState(false);
	const [addDisabled, setAddDisabled] = useState(false);
	const [passStrength, setPassStrength] = useState('very-strong');
	const [passParams, setPassParams] = useState({
		uppercase: true,
		lowercase: true,
		integer: true,
		special: true,
	});

	const MIN_LENGTH = 1;
	const MAX_LENGTH = 50;

	const handleLengthChange = (e: any, type: string) => {
		// handle slider change
		if (type === 'slide') {
			setPasswordLength(e.target.value);
		}

		// handle remove btn click
		if (type === 'remove') {
			setPasswordLength((prev) => prev - 1);
		}
		// handle add btn click
		if (type === 'add') {
			setPasswordLength((prev) => prev + 1);
		}
		// handle btn enable on btn click
		if (passwordLength <= MIN_LENGTH) {
			setRemoveDisabled(true);
		}
		// handle btn enable on btn click
		if (passwordLength >= MAX_LENGTH) {
			setAddDisabled(true);
		}

		// check length to disable btn
		if (passwordLength <= MAX_LENGTH) {
			setAddDisabled(false);
		}
		if (passwordLength >= MIN_LENGTH) {
			setRemoveDisabled(false);
		}

		// check length to change strength
		if (passwordLength <= 2) {
			setPassStrength('weak');
		} else if (passwordLength > 2 && passwordLength <= 5) {
			setPassStrength('good');
		} else if (passwordLength > 5 && passwordLength <= 8) {
			setPassStrength('strong');
		} else {
			setPassStrength('very-strong');
		}
	};

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
							<input type='text' />
							<div className='input-container-actions'>
								<Image
									src={'/assets/icons/copy.svg'}
									alt='copy'
									title='Copy'
									height={20}
									width={20}
									className='icon'
								/>
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
								<RefreshIcon className='icon' />
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
							control={
								<Checkbox defaultChecked className='checkbox' />
							}
							className='label'
							label={<span className='label'>ABC</span>}
							onChange={() =>
								setPassParams((prev) => ({
									...prev,
									uppercase: !prev.uppercase,
								}))
							}
						/>
						<FormControlLabel
							checked={passParams.lowercase}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>abc</span>}
							onChange={() =>
								setPassParams((prev) => ({
									...prev,
									lowercase: !prev.lowercase,
								}))
							}
						/>
						<FormControlLabel
							checked={passParams.integer}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>123</span>}
							onChange={() =>
								setPassParams((prev) => ({
									...prev,
									integer: !prev.integer,
								}))
							}
						/>
						<FormControlLabel
							checked={passParams.special}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>#$&</span>}
							onChange={() =>
								setPassParams((prev) => ({
									...prev,
									special: !prev.special,
								}))
							}
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
