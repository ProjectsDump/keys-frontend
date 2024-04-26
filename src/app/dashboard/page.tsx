import PasswordList from '@/components/PasswordList';
import { Search } from '@mui/icons-material';

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<h1>Dashboard</h1>
			<p>
				Create and save safe and secure passwords to use for any account
				online.
			</p>
			<p>
				Never forget or have to click on forgot password to remember
				your passwords
			</p>
			<div className='search-container'>
				<input
					type='text'
					className='search-input'
					placeholder='Search'
				/>
				<Search className='search-icon' />
			</div>
			<PasswordList />
		</div>
	);
};

export default Dashboard;
