import { PasswordInterface } from '@/utils/Interfaces';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import React, { useState } from 'react';

const SaveModal = ({
	open,
	setOpen,
	password,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	password: string;
}) => {
	const [label, setLabel] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	const handleClose = () => {
		setOpen(false);
	};

	const hanbleChange = (
		e: any,
		setState: React.Dispatch<React.SetStateAction<string>>
	) => {
		setState(e.target.value);
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			PaperProps={{
				component: 'form',
				style: {
					borderRadius: '10px',
				},
				onSubmit: (event: any) => {
					event.preventDefault();
					const body: PasswordInterface = {
						label,
						username,
						password,
						description,
					};
					handleClose();
				},
			}}>
			<DialogTitle>Save Password</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Add a Label to your password and some optional info so you
					can find it later on your profile.
				</DialogContentText>
				<TextField
					required
					disabled
					margin='dense'
					id='password'
					name='password'
					label='Password'
					type='text'
					fullWidth
					variant='standard'
					value={password}
				/>
				<TextField
					autoFocus
					required
					margin='dense'
					id='label'
					name='label'
					label='Password Label'
					type='text'
					fullWidth
					variant='standard'
					onChange={(e) => hanbleChange(e, setLabel)}
					value={label}
				/>
				<TextField
					autoFocus
					required
					margin='dense'
					id='username'
					name='username'
					label='Password username'
					type='text'
					fullWidth
					variant='standard'
					onChange={(e) => hanbleChange(e, setUsername)}
					value={username}
				/>
				<TextField
					margin='dense'
					id='description'
					name='description'
					label='Password Description'
					type='text'
					fullWidth
					variant='standard'
					rows={3}
					maxRows={4}
					onChange={(e) => hanbleChange(e, setDescription)}
					value={description}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='error'>
					Cancel
				</Button>
				<Button type='submit'>Save</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SaveModal;
