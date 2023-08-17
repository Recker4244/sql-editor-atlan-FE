import React from 'react';
import { getTableColumns } from '../../utils/Table/table';
import './TableSchema.css';

const TableSchema=(props)=>{
	return (
		<div className='table-schema'>
			<table>
				{getTableColumns(props.data)}
			</table>
		</div>
	);
};

export default TableSchema;