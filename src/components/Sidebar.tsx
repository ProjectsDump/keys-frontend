'use client';

import { Close, Menu, Password, Person } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const sideBarLinks = [
	{
		title: 'Passwords',
		description: 'A list of all saved passwords',
		link: '/dashboard',
		icon: <Password />,
	},
	{
		title: 'Account',
		description: 'Manage User account',
		link: '/dashboard/profile',
		icon: <Person />,
	},
];

const Sidebar = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	const pathname = usePathname(); // Assumed to return the current route/path


	const handleToggle = () => {
		setOpenMenu((prev) => !prev);
	};
	return (
		<>
			<div
				className={`sidebar-container ${
					openMenu ? '' : 'closed'
				}`}></div>
			<section className={`sidebar ${openMenu ? 'open' : 'closed'}`}>
				<div
					className='blur-bg desktop menu'
					onClick={() => handleToggle()}>
					<Menu />{' '}
					<span style={{ display: openMenu ? 'inline' : 'none' }}>
						Menu
					</span>
				</div>

				<div
					className='blur-bg mobile menu'
					onClick={() => handleToggle()}>
					{openMenu ? <Close /> : <Menu />}{' '}
				</div>
				{sideBarLinks.map((link, index) => {
					return (
						<div
							key={index}
							className={`blur-bg ${pathname === link.link && "active-link"}`} 
							title={link.description}>
							<Link className='Link' href={link.link}>
								{link.icon}{' '}
								<span
									style={{
										display: openMenu ? 'inline' : 'none',
									}}>
									{link.title}
								</span>
							</Link>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Sidebar;
