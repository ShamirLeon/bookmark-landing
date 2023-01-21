const NavMenu = params => {
	return (
		<li className='hidden items-center gap-12 text-sm lg:flex'>
			<ul>
				<button>FEATURES</button>
			</ul>
			<ul>
				<button>PRICING</button>
			</ul>
			<ul>
				<button>CONTACT</button>
			</ul>
			<ul>
				<button className='rounded-md bg-SoftRed py-2 px-7 text-white'>
					LOGIN
				</button>
			</ul>
		</li>
	);
};

export default NavMenu;
