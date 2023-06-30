'use client';

import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
// import { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);

	const mediaStyle = () => {
		return {
			display: showMobileNav ? 'flex' : 'none',
		};
	};

	return (
		<section className='navbar'>
			<div className='logo'>
				<Link className='Link' href={'/'}>
					<Image
						src='/logo/vector/default-monochrome.svg'
						alt='logo'
						className='logo-img'
						fill
					/>
				</Link>
			</div>

			{/* Desktop navbar */}
			<nav className={`desktop-nav`}>
				<Link className='Link' href={'/generate-password'}>
					<span className='click_animation'>
						Generate Secure Password
					</span>
				</Link>
				<Link className='Link' href={'/register'}>
					<button className='btn signup-btn'>Sign Up</button>
				</Link>
				<button className='btn login-btn'>Log In</button>
			</nav>

			{/* mobile nav */}
			<div className='toggle-menu-icon'>
				<MenuIcon onClick={() => setShowMobileNav((prev) => !prev)} />
				<nav style={mediaStyle()} className={`mobile-nav`}>
					<Link className='Link' href={'/generate-password'}>
						<span className='click_animation'>
							Generate Secure Password
						</span>
					</Link>
					<Link className='Link' href={'/register'}>
						<button className='btn signup-btn'>Sign Up</button>
					</Link>
					<button className='btn login-btn'>Log In</button>
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
