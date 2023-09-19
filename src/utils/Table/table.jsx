/* eslint-disable no-unused-vars */
import React from 'react';

const columnDescriptions = {
	'customerID': 'ID of the Customer',
	'orderID': 'ID of the Order',
	'productID': 'ID of the Product',
	'unitPrice': 'Unit Price of the Product',
	'quantity': 'Quantity of the Product',
	'discount': 'Discount on the Product',
	'companyName': 'Name of the Company',
	'contactName': 'First Name of the Customer',
	'contactTitle': 'Last Name of the Customer',
	'email': 'Email of the Contact',
	'address': 'Address of the Customer',
	'city': 'City of the Customer',
	'region': 'Region of Customer',
	'postalCode': 'Postal Code of Customer',
	'country':'Country of Customer',
	'phone':'Phone No. of Customer',
	'fax':'Fax No. of Customer',
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
				<td>{columnDescriptions[i]}</td>
			</tr>
		);
	});
};

export { getTableRowsFromData, getTableHeadFromData, getTableColumns, getTableColumnsWithDescription };
