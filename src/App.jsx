import Contact from './components/Contact/Contact';
import Extension from './components/ExtensionC/Extension';
import FAQSC from './components/FAQS/FAQS';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import NavBar from './components/Nav/NavBar';

const App = () => {
	return (
		<div className='font-Rubik'>
			<NavBar />
			<Hero />
			<Features />
			<Extension />
			<FAQSC />
			<Contact></Contact>
		</div>
	);
};

export default App;
