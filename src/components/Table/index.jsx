import React from 'react';
import { getTableHeadFromData, getTableRowsFromData } from '../../utils/Table/table';
import './Table.css';

const Table = (props) => {
	return (
		<div className='query-table-wrapper'>
			{props.result.length > 0 ? (
				<table className='query-table'>
					<thead>
						{getTableHeadFromData(props.result)}
					</thead>
					{getTableRowsFromData(props.result)}
				</table>
			) : null}
		</div>
	);
};

export default Table;