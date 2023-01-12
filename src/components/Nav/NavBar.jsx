import Logo from '../../assets/icons/logo-bookmark.svg';
import IconMenu from '../../assets/icons/IconMenu.jsx';

const NavBar = params => {
	return (
		<nav className='flex items-center justify-between px-7 py-8'>
			<a href='#'>
				<img src={Logo} alt='Bookmark logo' />
			</a>
			<button>
				<IconMenu />
			</button>
		</nav>
	);
};

export default NavBar;
