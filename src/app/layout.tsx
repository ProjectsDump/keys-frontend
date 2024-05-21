import '../styles/global.css';
import Navbar from '@/components/Navbar';
import UserProvider from '@/context/UserContext';
import { CookiesProvider } from 'next-client-cookies/server';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { headers } from 'next/headers';

export const metadata = {
	title: 'LockBox app',
	description: 'Generate and save secure passwords',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const routeArray = ['/register', '/login'];
	// const headersList = headers();
	// const domain = headersList.get('host') || '';
	// const fullUrl = headersList.get('referer') || '';
	// const pathname = fullUrl.split(domain)[1];

	// Check if pathname is in the routeArray
	// const rendernav = !routeArray.includes(pathname);

	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='./assets/images/logo.png' sizes='any' />
			</head>
			<body>
				<div className='main'>
					<div className='gradient' />
				</div>
				<CookiesProvider>
					<ToastContainer
						position='top-right'
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
						theme='light'
					/>
					<UserProvider>
						<main className='app'>
							{/* {rendernav && ( */}
							<>
								<Navbar />{' '}
								<div className='navbar-placeholder' />
							</>
							{/* )}s */}
							{children}
						</main>
					</UserProvider>
				</CookiesProvider>
			</body>
		</html>
	);
}
