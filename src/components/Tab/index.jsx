import React from 'react';
import './Tab.css';

const Tab=(props)=>{
	return (
		<div className={`${props.active==true?'active':'non-active'}`} >
			<p>{props.tab}</p>
		</div>
	);
};

export default Tab;