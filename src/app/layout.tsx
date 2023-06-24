import '../styles/global.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Keys app',
	description: 'Generate and save secure passwords',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='main'>
					<div className='gradient' />
				</div>
				<main className='app'>{children}</main>
			</body>
		</html>
	);
}
