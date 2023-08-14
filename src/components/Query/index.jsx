import React from 'react';
import './Query.css';

export const Query=(props)=>{
	return (<div className='query' onClick={props.onClickFunc}>
		<code >{props.code}</code>
	</div>);
};