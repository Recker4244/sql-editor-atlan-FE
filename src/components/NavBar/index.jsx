import React from 'react';
import './NavBar.css';
import logo from '../../assets/images/logo.svg';


const NavBar = () => {
	return (<nav className='nav-bar'>
		<img src={logo} alt="logo"/>
		<div className='links'>
			<div className='link'>
				<a href='/' className="nav-link">
              Home
				</a>
			</div>
			<div className='link'>
				<a href='/editor' className="nav-link">
              Editor
				</a>
			</div>
			<div className='link'>
				<a className="nav-link">
              About Us
				</a>
			</div>
			<div className='link'>
				<a className="nav-link">
              Login
				</a>
			</div>
		</div>
		
	</nav>);
};

export default NavBar;