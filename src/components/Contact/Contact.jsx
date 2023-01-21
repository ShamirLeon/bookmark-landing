import { useState } from 'react';

/* eslint-disable react/no-unescaped-entities */
const Contact = params => {
	const [email, setEmail] = useState(true);

	const validateEmail = () => {
		const emailInput = document.getElementById('user-email');
		const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

		if (validEmail.test(emailInput.value)) {
			console.log('Valid email');
			setEmail(true);
			console.log(email);
		} else {
			console.log('Invalid Email');
			setEmail(false);
			console.log(email);
		}
	};

	return (
		<section className='mt-16 bg-SoftBlue py-14 px-7 text-center text-white'>
			<div className='lg:mx-auto lg:w-1/2'>
				<h3 className='tracking-widest'>35.000+ ALREADY JOINED</h3>
				<h2 className='mt-2 text-2xl font-[500] tracking-wider'>
					Stay -up-to-date with what we're doing
				</h2>
				<div className='relative lg:mt-4 lg:flex lg:items-center lg:gap-5'>
					<div className='relative w-full shrink-[2]'>
						<input
							id='user-email'
							type='email'
							placeholder='Enter your e-mail address'
							className='relative z-10 mt-8 w-full rounded-md p-3 text-black placeholder:px-2 lg:mt-0'
						/>
						{
							email ? ''
							: <span className='absolute left-0 -bottom-6 z-0 w-full rounded-b-md bg-SoftRed px-2 py-1 text-left text-sm'>
							Whoops, make sure it's an email
						</span> 
						}
					</div>
					<button
						onClick={() => validateEmail()}
						className='mx-auto mt-8 block w-full shrink-[4] rounded-md border-[1px] border-SoftRed/0 bg-SoftRed py-3 transition-all hover:border-SoftRed/100 hover:bg-white hover:text-SoftRed lg:mt-0'
					>
						Contact Us
					</button>
				</div>
			</div>
		</section>
	);
};
export default Contact;
