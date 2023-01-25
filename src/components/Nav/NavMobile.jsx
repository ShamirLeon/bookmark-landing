import Logo from '../../assets/icons/Logo'
import IconClose from '../../assets/icons/IconClose'

const NavMobile = ({handlerMenu}) => {

    return(
        <div id='menuDiv' className='block w-full h-full absolute bg-DarkBlue/80 z-50 top-30 backdrop-blur-md opacity-100'>
            <div className=' py-8 flex items-center justify-between border-b-[1px] w-[80%] mx-auto'>
                <Logo className='scale-110'></Logo>
                <button onClick={()=> handlerMenu(false)} > 
                <IconClose className='scale-110'></IconClose>
                </button>
            </div>
            <li className='items-center gap-8 text-xl flex flex-col pt-8 text-center text-white'>
			<ul className='hover:text-SoftRed border-b-[1px] w-[80%] pb-8 '>
				<button className='tracking-widest'>FEATURES</button>
			</ul>
			<ul className='hover:text-SoftRed border-b-[1px] w-[80%] pb-8 '>
				<button className='tracking-widest'>PRICING</button>
			</ul>
			<ul className='hover:text-SoftRed border-b-[1px] w-[80%] pb-8 '>
				<button className='tracking-widest'>CONTACT</button>
			</ul>
			<ul className='w-[80%]'>
				<button className='rounded-md border-[2px] border-white/100 py-2 px-7 text-white transition-all hover:border-SoftRed/100  hover:text-SoftRed w-full'>
					LOGIN
				</button>
			</ul>
		</li>
        </div>
    )
}
export default NavMobile