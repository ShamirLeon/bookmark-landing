import { hero } from '../../data/data.json';
import IllustrationHero from '../../assets/icons/illustration-hero.svg';

const Hero = params => {
	return (
		<main className='my-8'>
			<div className='relative'>
				<img
					src={IllustrationHero}
					alt='Ilustration Hero Bookmark'
					className='scale-90'
				/>
				<div className='absolute right-0 top-16 -z-50 h-[70%] w-[70%] rounded-l-full bg-SoftBlue'></div>
			</div>
			<div className='flex flex-col gap-5 px-7 text-center'>
				<h1 className='text-2xl  font-bold text-DarkBlue'>{hero.title}</h1>
				<p className='text-base text-GrayishBlue'>{hero.description}</p>

				<div className='my-8'>
					<a
						href='#'
						className='mx-2 rounded-md bg-SoftBlue py-3 px-3 text-sm font-medium text-white shadow-lg'
					>
						Get it on Chrome
					</a>

					<a
						href='#'
						className='mx-2 rounded-md bg-SoftBlue py-3 px-3 text-sm font-medium text-white shadow-lg'
					>
						Get it on firefox
					</a>
				</div>
			</div>
		</main>
	);
};

export default Hero;
