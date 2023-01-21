import Logo from '../../assets/icons/logo-bookmark.svg';
import IconMenu from '../../assets/icons/IconMenu.jsx';
import NavMenu from './NavMenu';

const NavBar = params => {
	return (
		<nav className='flex items-center justify-between px-7 py-8 lg:px-32'>
			<a href='#'>
				<img src={Logo} alt='Bookmark logo' />
			</a>
			<button>
				<IconMenu className='lg:hidden' />
			</button>
			<NavMenu />
		</nav>
	);
};

export default NavBar;
