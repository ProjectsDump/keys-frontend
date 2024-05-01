import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
    TextField,
} from '@mui/material';
import React from 'react';

const SaveModal = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleClose = () => {
		setOpen(false);
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
					// const formData = new FormData(event.currentTarget);
					// const formJson = Object.fromEntries(formData.entries());
					// const email = formJson.email;
					// console.log(email);
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
					margin='dense'
					id='password'
					name='password'
					label='Password'
					type='text'
					fullWidth
					variant='standard'
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
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color='error'>Cancel</Button>
				<Button type='submit'>Save</Button>
			</DialogActions>
		</Dialog>
	);
};

export default SaveModal;
