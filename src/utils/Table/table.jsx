/* eslint-disable no-unused-vars */
import React from 'react';

const getTableRowsFromData = (arr) => {
	const keys = Object.keys(arr[0]);
	console.log(arr.map((i,index) => {
		return (
			<tr key={index}>
				{keys.map((a,i) => {
					return <td key={i}>{i[a]}</td>;
				})}
			</tr>
		);
	}));
	return arr.map((i,index) => {
		return (
			<tr key={index}>
				{keys.map((a,idx) => {
					return <td key={idx}>{i[a]}</td>;
				})}
			</tr>
		);
	});
};
  
const getTableHeadFromData = (arr) => {
	const keys = Object.keys(arr[0]);
	return (
		<tr>
			{keys.map((i) => {
				return <td key={i}>{i}</td>;
			})}
		</tr>
	);
};
  
const getTableColumns = (arr) => {
	const keys = Object.keys(arr[0]);
	return keys.map((i) => {
		return (
			<tr key={i}>
				<td >{i}</td>
			</tr>
		);
	});
};
  
export { getTableRowsFromData, getTableHeadFromData, getTableColumns };
  