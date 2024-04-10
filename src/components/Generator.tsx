'use client';

import Image from 'next/image';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Checkbox, FormControlLabel, Slider, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { passwordGeneratorFunc } from '@/utils/password-generator-func';
import {
	handleBtnClick,
	handleCopy,
	handleGenerate,
	handleSlider,
	strengthTag,
} from '@/utils/helperFunc';
import { useFormControl } from '@/utils/customHooks';

const passParamsInitialState = {
	uppercase: true,
	lowercase: true,
	integer: true,
	special: true,
};

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

	// password parameters --custom hook
	const [passParams] = useFormControl(passParamsInitialState);

	// password gan gan
	const [password, setPassword] = useState<string>(
		passwordGeneratorFunc(passwordLength, passParams.value)
	);
	const [copied, setCopied] = useState(false);

	// min and max length of password
	const MIN_LENGTH: number = 1;
	const MAX_LENGTH: number = 50;

	return (
		<div className='generate-body'>
			<div className='strength-img-container' >
				<Image
					src={'/assets/images/fortress.svg'}
					alt='password strength'
					width={0}
					height={0}
					className='strength-img'
				/>
			</div>
			<div className='generate-form-container' >
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
								<span
									onClick={() =>
										handleCopy(setCopied, password)
									}>
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

								<span
									style={strengthTag(passStrength)}
									className='strength-tag'>
									{passStrength}
								</span>
								<RefreshIcon
									onClick={() =>
										handleGenerate(
											setPassword,
											passwordLength,
											passParams.value
										)
									}
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
							checked={passParams.value.uppercase}
							control={<Checkbox className='checkbox' />}
							className='label'
							label={<span className='label'>ABC</span>}
							onChange={() =>
								passParams.onChange(
									setPassword,
									passwordLength,
									'uppercase'
								)
							}
						/>
						<FormControlLabel
							checked={passParams.value.lowercase}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>abc</span>}
							onChange={() =>
								passParams.onChange(
									setPassword,
									passwordLength,
									'lowercase'
								)
							}
						/>
						<FormControlLabel
							checked={passParams.value.integer}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>123</span>}
							onChange={() =>
								passParams.onChange(
									setPassword,
									passwordLength,
									'integer'
								)
							}
						/>
						<FormControlLabel
							checked={passParams.value.special}
							control={<Checkbox className='checkbox' />}
							label={<span className='label'>#$&</span>}
							onChange={() =>
								passParams.onChange(
									setPassword,
									passwordLength,
									'special'
								)
							}
						/>
					</div>
				</div>
				<div className='generate-item third'>
					<div className='generate-label'>
						<span className='title-label'>Password Length:</span>
						<span className='title-label-ans'>
							{passwordLength + 1}
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
								onClick={() =>
									handleBtnClick(
										'remove',
										setPasswordLength,
										passwordLength,
										setPassStrength,
										setRemoveDisabled,
										setAddDisabled,
										setPassword,
										passParams.value
									)
								}>
								<RemoveIcon className='slider-icon' />
							</button>

							<Slider
								aria-label='Password Length'
								size='small'
								valueLabelDisplay='auto'
								value={passwordLength}
								onChange={(e) =>
									handleSlider(
										e,
										setPasswordLength,
										passwordLength,
										setPassStrength,
										setRemoveDisabled,
										setAddDisabled,
										setPassword,
										passParams.value
									)
								}
								min={MIN_LENGTH}
								max={MAX_LENGTH}
								className='slider'
							/>

							<button
								type='button'
								disabled={addDisabled}
								className='slider-icon-container'
								onClick={() =>
									handleBtnClick(
										'add',
										setPasswordLength,
										passwordLength,
										setPassStrength,
										setRemoveDisabled,
										setAddDisabled,
										setPassword,
										passParams.value
									)
								}>
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
