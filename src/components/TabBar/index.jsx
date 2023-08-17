import React from 'react';
import './TabBar.css';
import Tab from '../Tab';

const TabBar=(props)=>{
	const onChange=props.onChangeFunc;
	return (
		<div className='tab-bar'>
			{props.tabs.map((tab,index)=>{
				return (
					<div className='tabs' key={index} onClick={()=>{onChange(index);}}>
						<Tab active={props.tab==index} tab={tab}></Tab>
					</div>
				);
			})
			}
		</div>
	);
};

export default TabBar;