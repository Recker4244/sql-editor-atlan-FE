import Papa from 'papaparse';

export const fetchData = async (tableName) => {
	const response = await fetch(`https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${tableName}.csv`);
	const csvData = await response.text();
	var contacts;
	// const decodedData = atob(csvData);
	Papa.parse(csvData, {
		header: true,
		dynamicTyping: true,
		skipEmptyLines: true,
		complete: function (results) {
			contacts = results.data;
		}
	});
	return contacts;
};