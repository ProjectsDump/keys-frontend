import Generator from '@/components/Generator';

export default function GeneratePassword() {
	return (
		<div className='generate-password-page'>
			<div className='generate-head'>
				<h1>Generate A Random And Secure Password</h1>
				<p>
					Create and save safe and secure passwords to use for any
					account online.
				</p>
			</div>
			<Generator />
		</div>
	);
}
