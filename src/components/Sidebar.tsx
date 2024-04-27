'use client';

import { Menu, Password, Person } from '@mui/icons-material';
import Link from 'next/link';
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
		link: '/account',
		icon: <Person />,
	},
];

const Sidebar = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(true);

	return (
		<div className={`sidebar-container ${openMenu ? '' : 'closed'}`}>
			<section className={`sidebar`}>
				<div
					className='blur-bg active'
					onClick={() => setOpenMenu((prev) => !prev)}>
					<Menu />{' '}
					<span style={{ display: openMenu ? 'inline' : 'none' }}>
						Menu
					</span>
				</div>
				{sideBarLinks.map((link, index) => {
					return (
						<div
							key={index}
							className='blur-bg'
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
		</div>
	);
};

export default Sidebar;
