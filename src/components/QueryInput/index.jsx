import React from 'react';
import './QueryInput.css';

function QueryInput() {
	return <div className='query-input'>
		<input type="text" placeholder="SQL Query" ></input>
	</div>;
}

export default QueryInput;