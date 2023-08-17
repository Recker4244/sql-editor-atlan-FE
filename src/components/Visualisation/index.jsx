import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Visualisation.css';

const Visualisation = ({ data }) => {
	const [selectedGraphType, setSelectedGraphType] = useState('column');
	const [selectedProperty, setSelectedProperty] = useState('gender');
  
	const handleGraphTypeChange = (event) => {
		setSelectedGraphType(event.target.value);
	};
  
	const handlePropertyChange = (event) => {
		setSelectedProperty(event.target.value);
	};
  
	const getAggregatedData = () => {
		const aggregation = {};
  
		data.forEach((item) => {
			const propertyValue = item[selectedProperty];
			aggregation[propertyValue] = (aggregation[propertyValue] || 0) + 1;
		});
  
		return Object.entries(aggregation);
	};
  
	const getChartOptions = () => {
		const aggregatedData = getAggregatedData();
		const chartData = aggregatedData.map(([, count]) => count);
  
		switch (selectedGraphType) {
		case 'column':
			return {
				title: {
					text: `Column Chart - ${selectedProperty}`
				},
				xAxis: {
					categories: aggregatedData.map(([propertyValue]) => propertyValue)
				},
				series: [{
					type: 'column',
					name: 'Count',
					data: chartData
				}]
			};
		case 'pie':
			return {
				title: {
					text: `Pie Chart - ${selectedProperty}`
				},
				series: [{
					type: 'pie',
					name: 'Count',
					data: aggregatedData.map(([propertyValue, count]) => ({
						name: propertyValue,
						y: count
					}))
				}]
			};
		default:
			return {};
		}
	};
  
	return (
		<div>
			<div className='options'>
				<div>
					<label htmlFor="graphType">Select a graph type: </label>
					<select id="graphType" value={selectedGraphType} onChange={handleGraphTypeChange}>
						<option value="column">Column Chart</option>
						<option value="pie">Pie Chart</option>
					</select>
				</div>
				<div>
					<label htmlFor="property">Select a property: </label>
					<select id="property" value={selectedProperty} onChange={handlePropertyChange}>
						{Object.keys(data[0]).map((property) => (
							<option key={property} value={property}>{property.charAt(0).toUpperCase() + property.slice(1)}</option>
						))}
						{/* Add other properties as needed */}
					</select>
				</div>
			</div>
			
			<HighchartsReact highcharts={Highcharts} options={getChartOptions()} />
		</div>
	);
};
  
export default Visualisation;
  
  
  