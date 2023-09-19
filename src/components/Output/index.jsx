import { useContext, React, useState } from 'react';
import MainContext from '../../MainContext';
import Table from '../Table/index';
import { CSVLink } from 'react-csv';
import './Output.css';
import TableSchema from '../TableSchema';
import TabBar from '../TabBar';
import { FaDownload } from 'react-icons/fa';
import Visualisation from '../Visualisation';
import { useEffect } from 'react';

const Output = () => {
	const { queryHistory } = useContext(MainContext);
	const [tab, setTab] = useState(0);
	const [isLimited,setIsLimited]= useState(false);
	const [output,setOutput]=useState([]);
	const exportData = () => {
		console.log('Exporting Data');
	};
	useEffect(() => {
		setOutput(queryHistory.outputData);
	}, [queryHistory.outputData]);
	const getTab = () => {
		switch (tab) {
		case 0:
			return (<Table result={output}>
			</Table>);
		case 1:
			return (<TableSchema data={output}></TableSchema>);

		case 2:
			return <Visualisation data={output} />;

		default:
			break;
		}
	};
	const handleChange=(e)=>{
		if(e.target.checked)
			setOutput(queryHistory.outputData.slice(0, 100));
		else
			setOutput(queryHistory.outputData);
		setIsLimited(e.target.checked);
	};

	return (
		<div className='query-results'>
			{queryHistory.outputData.length > 0 ? (
				<>
					<TabBar tab={tab} tabs={['Output', 'Table Structure', 'Visualisation']} onChangeFunc={setTab}></TabBar>
					<div className='query-details'>

						{tab == 0 || tab == 1 ? 
							<div className='information'>
								<p>
									<span>
										{tab == 0 ? output.length : Object.keys(queryHistory.outputData[0]).length}
									</span>{' '}
							rows in Set
							
								</p>
								{queryHistory.outputData.length>=100?
									<div className='limiter'>
										<input checked={isLimited} type="checkbox" onChange={handleChange} />
										<p>Limit to 100 rows</p>
									</div>:null}
								
							</div>
							: null}
						{tab == 0 || tab == 1 ?
							<div className='export-button-wrapper'>
								<CSVLink className='export-button'
									data={output}
									filename={'dataOutput.csv'}
								>
									<button onClick={exportData}>
										Export <FaDownload />
									</button>
								</CSVLink>
							</div> : null}

					</div>

					{getTab()}

				</>
			) : (
				<div className='placeholder-text'>
					<span className='fa fa-play'></span>
					<p>Write a query and run it to see results!</p>
				</div>
			)}
		</div>
	);
};

export default Output;
