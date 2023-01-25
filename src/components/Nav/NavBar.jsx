import Logo from '../../assets/icons/logo-bookmark.svg';
import IconMenu from '../../assets/icons/IconMenu.jsx';
import NavMenu from './NavMenu';
import NavMobile from './NavMobile';
import { useState } from 'react';

const NavBar = params => {
	const [menu, setMenu] = useState(false)
	return (
		<>
		<nav className='flex items-center justify-between px-7 py-8 lg:px-32 relative'>
			<a href='#'>
				<img src={Logo} alt='Bookmark logo' />
				<h2>{menu}</h2>
			</a>
			<button onClick={()=> setMenu(!menu)}>
				<IconMenu className='lg:hidden' />
			</button>
			<NavMenu />
		</nav>
		{
			menu ? <NavMobile handlerMenu={sta => setMenu(sta)}/> : false
		}
		
		</>
	);
};

export default NavBar;
