import { features } from '../../data/data.json';
import FeaturesItem from './FeaturesItems';

const Features = params => {
	return (
		<section className='relative px-7 py-20 lg:px-32'>
			<div className='mx-auto flex max-w-[500px] flex-col gap-4 py-4 text-center'>
				<h2 className='text-2xl font-bold  text-DarkBlue lg:text-3xl'>
					{features.title}
				</h2>
				<p className=' text-base text-GrayishBlue lg:text-lg'>
					{features.description}
				</p>
			</div>
			<FeaturesItem features={features}></FeaturesItem>
			<div className='absolute left-0 bottom-[360px] -z-50 h-[170px] w-[250px] rounded-r-full bg-SoftBlue lg:bottom-0 lg:h-[300px] lg:w-[600px]'></div>
		</section>
	);
};

export default Features;
