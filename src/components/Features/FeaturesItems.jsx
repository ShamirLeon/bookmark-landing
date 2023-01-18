import IllustrationFeatures1 from '../../assets/icons/illustration-features-tab-1.svg';
import IllustrationFeatures2 from '../../assets/icons/illustration-features-tab-2.svg';
import IllustrationFeatures3 from '../../assets/icons/illustration-features-tab-3.svg';

import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FeaturesItem = ({ features = [] }) => {
	const [Tab, setTab] = useState(0);
	const illustrations = [
		IllustrationFeatures1,
		IllustrationFeatures2,
		IllustrationFeatures3,
	];

	return (
		<div className='flex flex-col py-6 transition-all'>
			<div className='border-b-[1px] border-GrayishBlue/50'></div>
			{features.items.map((Feature, index) => (
				<button
					key={index}
					onClick={() => setTab(index)}
					className='after:content-[" "] relative border-b-[1px] border-GrayishBlue/50 py-3  text-DarkBlue after:absolute  after:bottom-0 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-[30%] after:bg-SoftRed after:opacity-0 after:transition-all focus:after:opacity-100'
				>
					{Feature.head}
				</button>
			))}

			<div className='flex flex-col gap-2 py-4 text-center '>
				<img
					src={illustrations[Tab]}
					alt={features.items[Tab].title}
					className='scale-90'
				/>
				<h2 className='text-xl  font-bold text-DarkBlue'>
					{features.items[Tab].title}
				</h2>
				<p className='text-base text-GrayishBlue'>
					{features.items[Tab].description}
				</p>
			</div>
		</div>
	);
};

export default FeaturesItem;
