import { hero } from '../../data/data.json';
import IllustrationHero from '../../assets/icons/illustration-hero.svg';

const Hero = params => {
	return (
		<main className='my-8 flex-row-reverse items-center justify-around lg:flex lg:gap-12 lg:px-32'>
			<div className='relative'>
				<img
					src={IllustrationHero}
					alt='Ilustration Hero Bookmark'
					className='scale-90 lg:scale-100'
				/>
			</div>
			<div className='absolute right-0 top-[200px] -z-50 h-[170px] w-[250px] rounded-l-full bg-SoftBlue lg:top-[230px] lg:h-[300px] lg:w-[500px]'></div>
			<div className='flex flex-col gap-5 px-7 text-center lg:max-w-[500px] lg:px-0 lg:text-left'>
				<h1 className='text-2xl font-bold text-DarkBlue lg:text-5xl lg:font-normal'>
					{hero.title}
				</h1>
				<p className='text-base text-GrayishBlue'>{hero.description}</p>

				<div className='my-8'>
					<a
						href='#'
						className='mx-2 rounded-md bg-SoftBlue py-3 px-3 text-sm font-medium text-white shadow-lg lg:mx-0'
					>
						Get it on Chrome
					</a>

					<a
						href='#'
						className='mx-2 rounded-md py-3 px-3 text-sm font-medium text-GrayishBlue shadow-lg lg:mx-5'
					>
						Get it on firefox
					</a>
				</div>
			</div>
		</main>
	);
};

export default Hero;
