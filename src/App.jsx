import Extension from './components/ExtensionC/Extension';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import NavBar from './components/Nav/NavBar';

const App = () => {
	return (
		<div className='font-Rubik'>
			<NavBar></NavBar>
			<Hero></Hero>
			<Features></Features>
			<Extension></Extension>
		</div>
	);
};

export default App;
