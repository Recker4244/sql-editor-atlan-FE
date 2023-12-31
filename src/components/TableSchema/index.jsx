import React from 'react';
import { getTableColumnsWithDescription } from '../../utils/Table/table';
import './TableSchema.css';

const TableSchema=(props)=>{

	return (
		<div className='table-schema'>
			<table>
				<thead>
					<tr>
						<td>Column Name</td>
						<td>Description</td>
					</tr>
				</thead>
				{getTableColumnsWithDescription(props.data)}
				
			</table>
		</div>
	);
};

export default TableSchema;