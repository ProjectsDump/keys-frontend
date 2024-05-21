'use client';

import { useState } from 'react';
import { Logo } from '../../public/logo/vector/Logo';
import { FcGoogle } from 'react-icons/fc';
import { UserSignUpInterface } from '@/utils/Interfaces';
import { signUpApiCall } from '@/utils/apiCalls';
import { useRouter } from 'next/navigation';
import { errorTimer } from '@/utils/helperFunc';

const Auth = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [error, setError] = useState('');
	const [isError, setIsError] = useState(false);

  const router = useRouter();

	const handleSignupSubmit = async (e: any) => {
		e.preventDefault();
		const body: UserSignUpInterface = { username, email, password };
		try {
			await signUpApiCall(body)
				.then((_) => {
					router.push('/login');
				})
				.catch((err) => {
					errorTimer(setIsError);
					setError(err?.response?.data?.error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{/* signup */}
			<section className='auth-page'>
				<div className='auth-container'>
					<div className='auth-logo'>
						<Logo />
					</div>

					<div className='auth-header'>
						<p>join our network</p>
						<p>
							Secure your digital life with our app, generating
							strong passwords for ultimate online protection.
						</p>
					</div>

					<div className='auth-google'>
						<span>
							<FcGoogle size={30} />
						</span>
						<p>Sign up with Google</p>
					</div>

					<div className='auth-span'>
						<span></span>
						<p>OR</p>
						<span></span>
					</div>

          <div className='authError'>{isError && <p>{error}</p>}</div>

					<form
						className='auth-credentials'
						onSubmit={handleSignupSubmit}>
						<label htmlFor='Name'>Name*</label>
						<input
							type='text'
							placeholder='Enter your name'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label htmlFor=''>Email*</label>
						<input
							type='text'
							placeholder='Enter your email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label htmlFor=''>Password*</label>
						<input
							type='password'
							placeholder='Create a password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type='submit' className='auth-create type1'>
							Sign up
						</button>
					</form>

					<div className='auth-btn'>
						<div className='auth-direct'>
							<p>
								Already have an account?<span>Log in</span>
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* login */}
		</>
	);
};

export default Auth;
