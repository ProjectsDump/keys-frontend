import Generator from '@/components/Generator'

const GeneratePassword = () => {
	return (
		<div className='generate-password-page'>
			<div className='generate-head'>
				<h1 data-aos='fade-down'>Generate A Random And Secure Password</h1>
				<p data-aos='fade-up'>
					Create and save safe and secure passwords to use for any
					account online.
				</p>
			</div>
			<Generator />
		</div>
	);
};

export default GeneratePassword;
