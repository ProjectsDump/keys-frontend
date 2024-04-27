'use client';

import { PasswordInterface } from '@/utils/Interfaces';
import KeyIcon from '@mui/icons-material/Key';
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Button } from '@mui/material';
import { Check, CopyAll } from '@mui/icons-material';
import { handleCopy } from '@/utils/helperFunc';

const SinglePasswordList = ({ password }: { password: PasswordInterface }) => {
	const [visible, setVisible] = useState<boolean>(false);
	const [copied, setCopied] = useState<boolean>(false);

	const hashPass = (pass: string) => {
		let res: string = '';
		for (let i = 0; i < pass.length; i++) {
			res += '•';
		}
		return res;
	};

	const summarize = (text: string) => {
		if (text.length > 20) {
			return text.slice(0, 20) + '...';
		}
		return text;
	};

	return (
		<div className='single-password-list'>
			<div className='icon'>
				<KeyIcon />
			</div>
			<div className='label'>{summarize(password.label)}</div>
			<div className='label'>{summarize(password.username)}</div>
			<div className='password'>
				<span>
					{visible
						? summarize(password.password)
						: summarize(hashPass(password.password))}
				</span>

				<span
					className='password-icon'
					onClick={() => setVisible(!visible)}>
					{visible ? (
						<VisibilityOffIcon className='eyeIcon' />
					) : (
						<VisibilityIcon className='eyeIcon' />
					)}
				</span>
				<span onClick={() => handleCopy(setCopied, password.password)}>
					{copied ? (
						<Check className='checkIcon' />
					) : (
						<CopyAll className='copyIcon' />
					)}
				</span>
			</div>
			<div className='actions'>
				<Button variant='outlined' color='primary'>
					Edit
				</Button>
				<Button variant='outlined' color='error'>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default SinglePasswordList;
