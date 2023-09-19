/* eslint-disable no-unused-vars */
import React from 'react';

const columnDescription = {
	'customerID': 'ID of the Customer',
	'companyName': 'First Name of the Contact',
	'last_name': 'Last Name of the Contact',
	'gender': 'Gender of the Contact',
	'email': 'Email of the Contact',
	'ip_address': 'IP address of the Contact',
};

const getTableRowsFromData = (arr) => {
	const keys = Object.keys(arr[0]);
	return arr.map((i, index) => {
		return (
			<tr key={index}>
				{keys.map((a, idx) => {
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
const getTableColumnsWithDescription = (arr) => {
	const keys = Object.keys(arr[0]);
	return keys.map((i) => {
		return (
			<tr key={i}>
				<td >{i}</td>
				<td>{columnDescription[i]}</td>
			</tr>
		);
	});
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns, getTableColumnsWithDescription };
