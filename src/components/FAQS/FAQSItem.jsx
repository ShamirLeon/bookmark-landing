import { Collapse } from 'react-collapse';
import IconArrow from '../../assets/icons/IconArrow';

// eslint-disable-next-line react/prop-types
const FAQSItem = ({ question, answer, open, toggle }) => {
	return (
		<div className='lg:w-[80%]'>
			<button
				className='w-min-[320px] mx-auto flex w-[330px] items-center justify-between border-b-[1px] border-b-GrayishBlue py-5 px-1 transition-all hover:text-SoftRed lg:w-[80%]'
				onClick={toggle}
			>
				<p>{question}</p>
				<span>
					{open ? (
						<IconArrow className='rotate-180 stroke-SoftRed stroke-2 transition-all duration-500 ease-in' />
					) : (
						<IconArrow className='stroke-SoftBlue stroke-2 transition-all duration-500 ease-out' />
					)}
				</span>
			</button>

			<Collapse isOpened={open}>
				<div className='lg:mx-auto lg:w-[80%]'>
					<p className='px-2 py-4 text-left'>{answer}</p>
				</div>
			</Collapse>
		</div>
	);
};

export default FAQSItem;
