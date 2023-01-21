import Atributtion from './components/Atributtion/Atributtion';
import Contact from './components/Contact/Contact';
import Extension from './components/ExtensionC/Extension';
import FAQSC from './components/FAQS/FAQS';
import Features from './components/Features/Features';
import FooterC from './components/Footer/Footer';
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
			<Contact />
			<FooterC />
			<Atributtion />
		</div>
	);
};

export default App;
