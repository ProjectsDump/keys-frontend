import SinglePasswordList from '@/components/SinglePasswordList';
import { Search } from '@mui/icons-material';

const passwords = [
	{
		label: 'Gmail',
		username: 'john.doe@gmail.com',
		password: 'mypassworjndssdoisdnsdosmdllx,czl,xclz,xlz,lxlksnnd',
	},
	{
		label: 'Microsoft',
		username: 'john.doe@gmail.com',
		password: 'mypassword',
	},
	{
		label: 'My Phone',
		username: 'john.doe@gmail.com',
		password: '123456',
	},
	{
		label: 'instagram',
		username: 'Glory135',
		password: 'instamypassword',
	},
];
export default function Dashboard() {
	return (
		<div className='dashboard'>
			<h1>Saved Passwords</h1>
			{/* <p>
				Create and save safe and secure passwords to use for any account
				online.
			</p>
			<p>
				Never forget or have to click on forgot password to remember
				your passwords
			</p> */}
			<div className='search-container'>
				<div className='search-main-container'>
					<Search className='search-icon' />
					<input
						type='text'
						className='search-input'
						placeholder='Search'
					/>
				</div>
			</div>

			<div className='passwords-list'>
				{passwords.map((password) => {
					return (
						<SinglePasswordList
							key={password.label}
							password={password}
						/>
					);
				})}
			</div>
		</div>
	);
}
