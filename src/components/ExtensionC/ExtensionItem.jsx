import Dots from '../../assets/icons/bg-dots.svg';

// eslint-disable-next-line react/prop-types
const ExtensionItem = ({ title, description }) => {
	return (
		<>
			<h3 className='mt-2 text-2xl font-bold text-DarkBlue'>{title}</h3>
			<p className='mb-4 text-GrayishBlue'>{description}</p>
			<img src={Dots} alt='Dots' className='my-4 scale-150' />
			<button className='my-4 rounded-md bg-SoftBlue py-3 px-5 text-lg font-medium text-white shadow-lg'>
				Add & Install Extension
			</button>
		</>
	);
};

export default ExtensionItem;
