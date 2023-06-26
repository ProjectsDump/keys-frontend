'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<section className='landing-page'>
			<div className='hero'>
				<div className='hero-text'>
					<div className='hero-text-container'>
						<h1>Generate And Save Secure Passwords</h1>
						<p>
							Never forget or have to click on forgot password to
							remember your passwords
						</p>
						<p>
							Generate complex and secure passwords that can be
							used anywhere
						</p>
						<Link className='Link' href={'/register'}>
							<button className='btn hero-btn'>
								Get Started{' '}
								<ArrowForwardIcon className='arrow-icon' />
							</button>
						</Link>
					</div>
				</div>
				<div className='hero-img'>
					<div className='hero-img-container'>
						<Image
							alt='hero'
							className='hero-image'
							src='/assets/images/hero.png'
							width={0}
							height={0}
							sizes='100vw'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
