import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

	return (<nav className='nav-bar'>
		<div className='link'>
			<Link to='/' className="nav-link">
              Home
			</Link>
		</div>
		<div className='link'>
			<Link to='/editor' className="nav-link">
              Editor
			</Link>
		</div>
		<div className='link'>
			<Link to='/' className="nav-link">
              About Us
			</Link>
		</div>
		<div className='link'>
			<Link to='/' className="nav-link">
              Login
			</Link>
		</div>
	</nav>);
};

export default NavBar;