const NavMenu = params => {
	return (
		<li className='hidden items-center gap-12 text-sm lg:flex '>
			<ul className="hover:text-SoftRed">
				<button>FEATURES</button>
			</ul>
			<ul className="hover:text-SoftRed">
				<button>PRICING</button>
			</ul>
			<ul className="hover:text-SoftRed">
				<button>CONTACT</button>
			</ul>
			<ul>
				<button className='rounded-md bg-SoftRed py-2 px-7 text-white hover:text-SoftRed hover:bg-white border-[1px] border-SoftRed/0 hover:border-SoftRed/100 transition-all'>
					LOGIN
				</button>
			</ul>
		</li>
	);
};

export default NavMenu;
