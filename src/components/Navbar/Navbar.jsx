import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';
const Navbar = () => {
	const [menu,setMenu]=useState(false)
	return (
		<nav>
			<div className="container flex-regular">
				<div className="logo">
					<img src={logo} alt="docmic logo" loading="lazy" />
				</div>
				<ul className={menu?"nav-list flex-regular active":"nav-list flex-regular "}>
					<li className="list-item active">Home</li>
					<li className="list-item">About</li>
					<li className="list-item">Department</li>
					<li className="list-item">Pages</li>
					<li className="list-item">Contact</li>
				</ul>
				<div className="cta">
					<button className="button-primary">Free Consultation</button>
				</div>

				{/* mobile menu  */}

				<div className="mobile-menu">
					{
						menu?
						<span className="close_menu" onClick={()=>setMenu(!menu)}>&#10006;</span>:
						<span className="open_menu" onClick={()=>setMenu(!menu)}>&#9776;</span>
					}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
