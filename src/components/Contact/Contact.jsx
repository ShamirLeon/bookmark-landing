/* eslint-disable react/no-unescaped-entities */
const Contact = params => {
	return (
		<section className='mt-16 bg-SoftBlue py-14 px-7 text-center text-white'>
			<h3 className='tracking-widest'>35.000+ ALREADY JOINED</h3>
			<h2 className='mt-2 text-2xl font-[500] tracking-wider'>
				Stay -up-to-date with what we're doing
			</h2>
			<input
				type='email'
				placeholder='Enter your e-mail address'
				className='mt-8 w-full rounded-md p-3 text-black placeholder:px-2 '
			/>
			<button className='mx-auto mt-4 block w-full rounded-md bg-SoftRed py-3'>
				Contact Us
			</button>
		</section>
	);
};
export default Contact;
