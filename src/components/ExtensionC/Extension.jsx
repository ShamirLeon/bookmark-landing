import { extension } from '../../data/data.json';

import ChromeIllustration from '../../assets/icons/logo-chrome.svg';
import FirefoxIllustration from '../../assets/icons/logo-firefox.svg';
import OperaIllustration from '../../assets/icons/logo-opera.svg';
import ExtensionItem from './ExtensionItem.jsx';

const Logos = [ChromeIllustration, FirefoxIllustration, OperaIllustration];

const Extension = params => {
	return (
		<div className='mt-10 px-7 text-center'>
			<h2 className='mt-4  text-xl font-bold text-DarkBlue'>
				{extension.title}
			</h2>
			<p className='mt-4 mb-6 text-base text-GrayishBlue'>
				{extension.description}
			</p>
			{extension.items.map((element, index) => (
				<div
					key={index}
					className='mx-auto my-16 flex max-w-[80%] flex-col items-center gap-2 overflow-hidden rounded-md py-6 shadow-lg'
				>
					<img
						src={Logos[index]}
						alt={element.title}
						className='my-3 max-w-[80px]'
					/>
					<ExtensionItem
						title={element.title}
						description={element.description}
					></ExtensionItem>
				</div>
			))}
		</div>
	);
};

export default Extension;
