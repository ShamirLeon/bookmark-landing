import { extension } from '../../data/data.json';

import ChromeIllustration from '../../assets/icons/logo-chrome.svg';
import FirefoxIllustration from '../../assets/icons/logo-firefox.svg';
import OperaIllustration from '../../assets/icons/logo-opera.svg';
import ExtensionItem from './ExtensionItem.jsx';
import { useEffect } from 'react';

const Logos = [ChromeIllustration, FirefoxIllustration, OperaIllustration];

const Extension = params => {
	useEffect(() => {
		const child2 = document.getElementById('itemsCont').children[1];
		child2.classList.add('my-[30px]');

		const child3 = document.getElementById('itemsCont').children[2];
		child3.classList.add('my-[60px]');
	});

	return (
		<div className='mt-24 px-7 text-center'>
			<div className='mx-auto max-w-[500px]'>
				<h2 className='mt-4  text-xl font-bold text-DarkBlue lg:text-3xl'>
					{extension.title}
				</h2>
				<p className='m10 mt-4 mb-6 text-base text-GrayishBlue lg:text-lg'>
					{extension.description}
				</p>
			</div>

			<div id='itemsCont' className='mx-auto flex max-w-[1000px]'>
				{extension.items.map((element, index) => (
					<div
						key={index}
						className='mx-auto flex h-[380px] max-w-[80%] flex-col items-center gap-2 overflow-hidden rounded-md py-6 shadow-xl lg:max-w-[300px]'
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
		</div>
	);
};

export default Extension;
