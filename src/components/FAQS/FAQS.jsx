import { useState } from 'react';
import { FAQS } from '../../data/data.json';
import FAQSItem from './FAQSItem';

const FAQSC = params => {
	const [open, setOpen] = useState(false);

	const toggle = index => {
		if (open === index) {
			return setOpen(false);
		}

		setOpen(index);
	};

	return (
		<section className='mx-auto flex max-w-[1000px] flex-col items-center gap-5 px-7 text-center lg:px-32'>
			<div className='mt-14 lg:w-4/5'>
				<h2 className='text-xl font-bold text-DarkBlue lg:text-3xl'>
					{FAQS.title}
				</h2>
				<p className='mt-4 text-base text-GrayishBlue lg:text-lg'>
					{FAQS.description}
				</p>
			</div>
			{FAQS.questions.map((element, index) => (
				<FAQSItem
					key={index}
					question={element.question}
					answer={element.answer}
					open={index === open}
					toggle={() => toggle(index)}
				/>
			))}
			<button className='my-4 rounded-md bg-SoftBlue py-3 px-5 text-base font-medium text-white shadow-lg'>
				More Info
			</button>
		</section>
	);
};

export default FAQSC;
