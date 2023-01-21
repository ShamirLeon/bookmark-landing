import Logo from '../../assets/icons/Logo';
import IconFacebook from '../../assets/icons/icon-facebook.svg';
import IconTwitter from '../../assets/icons/icon-twitter.svg';

const FooterC = () => {
	return (
		<footer className='flex flex-col items-center gap-8 bg-DarkBlue py-16'>
			<Logo />
			<div className='flex flex-col gap-6 text-center tracking-widest text-GrayishBlue'>
				<a href='#'>FEATURES</a>
				<a href='#'>PRICING</a>
				<a href='#'>CONTACT</a>
			</div>

			<div className='flex items-center gap-8'>
				<a href='https://facebook.com' target='_blank' rel='noreferrer'>
					<img src={IconFacebook} alt='Facebook' />
				</a>
				<a href='https://twitter.com' target='_blank' rel='noreferrer'>
					<img src={IconTwitter} alt='Twitter' />
				</a>
			</div>
		</footer>
	);
};
export default FooterC;
