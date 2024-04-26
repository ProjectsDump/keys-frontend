'use client';

import { UserContext } from '@/context/UserContext';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useState } from 'react';

const Navbar = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const { user } = useContext(UserContext);

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
				{user != null ? (
					<Link className='Link' href={'/dashboard'}>
						<button className='btn profile-btn'>Profile</button>
					</Link>
				) : (
					<>
						<Link className='Link' href={'/register'}>
							<button className='btn signup-btn'>Sign Up</button>
						</Link>
						<Link className='Link' href={'/login'}>
							<button className='btn login-btn'>Log In</button>
						</Link>
					</>
				)}
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
					{user != null ? (
						<Link className='Link' href={'/dashboard'}>
							<button className='btn profile-btn'>Profile</button>
						</Link>
					) : (
						<>
							<Link className='Link' href={'/register'}>
								<button className='btn signup-btn'>
									Sign Up
								</button>
							</Link>
							<Link className='Link' href={'/login'}>
								<button className='btn login-btn'>
									Log Ins
								</button>
							</Link>
						</>
					)}
				</nav>
			</div>
		</section>
	);
};

export default Navbar;
