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
		<div className='m-2 flex flex-col py-6 transition-all lg:max-h-[430px]'>
			<div className='border-b-[1px] border-GrayishBlue/50 lg:hidden'></div>
			<div className='flex flex-col lg:flex-row lg:justify-center'>
				{features.items.map((Feature, index) => (
					<button
						key={index}
						onClick={() => setTab(index)}
						className='after:content-[" "] relative border-b-[1px] border-GrayishBlue/50 py-3  text-DarkBlue after:absolute  after:bottom-0 after:right-0 after:left-0 after:mx-auto after:h-1 after:w-[40%] after:bg-SoftRed after:opacity-0 after:transition-all focus:after:opacity-100 lg:px-14 lg:after:w-[100%] '
					>
						{Feature.head}
					</button>
				))}
			</div>

			<div className='flex flex-col gap-5 py-4 text-center lg:mt-6 lg:flex-row lg:items-center lg:justify-center lg:gap-16'>
				<img
					src={illustrations[Tab]}
					alt={features.items[Tab].title}
					className='scale-90 lg:scale-100'
				/>
				<div className='max-w-[400px] lg:text-left '>
					<h2 className='my-4  text-xl font-bold text-DarkBlue lg:text-3xl'>
						{features.items[Tab].title}
					</h2>
					<p className='text-base text-GrayishBlue'>
						{features.items[Tab].description}
					</p>
					<button className='my-6 rounded-md bg-SoftBlue py-3 px-5 text-sm font-medium text-white shadow-lg'>
						More info
					</button>
				</div>
			</div>
		</div>
	);
};

export default FeaturesItem;
