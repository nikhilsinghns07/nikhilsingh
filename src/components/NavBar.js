import React from 'react';
import {Nav,NavLink,NavMenu,} from './NavbarElements';
import Logo from '../pics/Logo.png'

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
            <NavLink to='/' activeStyle> <img src={Logo} alt='Logo' style={{height:60,width:70,borderRadius:50}}/> </NavLink>
            <NavLink to='/projects' activeStyle>Projects</NavLink>
            <NavLink to='/download' activeStyle>Download</NavLink>
			<NavLink to='/blog' activeStyle>Blog</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
