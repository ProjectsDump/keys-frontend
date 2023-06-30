'use client';

import Image from 'next/image';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Checkbox, FormControlLabel, Slider, Stack } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const GeneratePassword = () => {
	return (
		<div className='generate-password-page'>
			<div className='generate-head'>
				<h1>Generate A Random And Secure Password</h1>
				<p>
					Create and save safe and secure passwords to use for any
					account online.
				</p>
			</div>
			<div className='generate-body'>
				<div className='strength-img-container'>
					{/* <Image
						src={'/assets/images/fortress.svg'}
						alt='password strength'
						width={0}
						height={0}
						className='strength-img'
					/> */}
					{/* <Image
						src={'/assets/images/strong.svg'}
						alt='password strength'
						width={0}
						height={0}
						className='strength-img'
					/> */}
					{/* <Image
						src={'/assets/images/good.svg'}
						alt='password strength'
						width={0}
						height={0}
						className='strength-img'
					/> */}
					<Image
						src={'/assets/images/weak.svg'}
						alt='password strength'
						width={0}
						height={0}
						className='strength-img'
					/>
				</div>
				<div className='generate-form-container'>
					<div className='generate-item first'>
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
								<span className='strength-tag'>Strong</span>
								<RefreshIcon className='icon' />
							</div>
						</div>
					</div>
					<div className='generate-item second'>
						<div className='generate-label'>
							<span className='title-label'>
								Characters Used:
							</span>
						</div>
						<div className='generate-params check'>
							<FormControlLabel
								control={
									<Checkbox
										defaultChecked
										className='checkbox'
									/>
								}
								className='label'
								label={<span className='label'>ABC</span>}
							/>
							<FormControlLabel
								control={<Checkbox className='checkbox' />}
								label={<span className='label'>abc</span>}
							/>
							<FormControlLabel
								control={<Checkbox className='checkbox' />}
								label={<span className='label'>123</span>}
							/>
							<FormControlLabel
								// disabled
								control={<Checkbox className='checkbox' />}
								label={<span className='label'>#$&</span>}
							/>
						</div>
					</div>
					<div className='generate-item third'>
						<div className='generate-label'>
							<span className='title-label'>
								Password Length:
							</span>
							<span className='title-label-ans'>10</span>
						</div>
						<div className='generate-params slider-container'>
							<Stack
								spacing={2}
								direction='row'
								sx={{ mb: 1 }}
								alignItems='center'>
								<span className='slider-icon-container'>
									<RemoveIcon className='slider-icon' />
								</span>

								<Slider
									aria-label='Password Length'
									size='small'
									defaultValue={10}
									valueLabelDisplay='auto'
									// value={}
									// onChange={}
									min={1}
									max={50}
									className='slider'
								/>
								<span className='slider-icon-container'>
									<AddIcon className='slider-icon' />
								</span>
							</Stack>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GeneratePassword;
