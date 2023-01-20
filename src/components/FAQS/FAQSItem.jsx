import { Collapse } from 'react-collapse';
import IconArrow from '../../assets/icons/IconArrow';

// eslint-disable-next-line react/prop-types
const FAQSItem = ({ question, answer, open, toggle }) => {
	return (
		<div>
			<button
				className='w-min-[320px] mx-auto flex w-[330px] items-center justify-between border-b-[1px] border-b-GrayishBlue py-5 px-1'
				onClick={toggle}
			>
				<p>{question}</p>
				<span>
					{open ? (
						<IconArrow className='rotate-180 transition-transform duration-500 ease-in' />
					) : (
						<IconArrow className='transition-transform duration-500 ease-out' />
					)}
				</span>
			</button>

			<Collapse isOpened={open}>
				<p className='px-2 py-4 text-left'>{answer}</p>
			</Collapse>
		</div>
	);
};

export default FAQSItem;
