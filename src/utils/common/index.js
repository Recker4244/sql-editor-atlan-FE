import Papa from 'papaparse';

export const fetchData = async (tableName) => {
	const response = await fetch(`/${tableName}.csv`);
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