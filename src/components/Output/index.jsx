import { useContext,React,useState} from 'react';
import MainContext from '../../MainContext';
import Table from '../Table/index';
import { CSVLink } from 'react-csv';
import './Output.css';
import TableSchema from '../TableSchema';
import TabBar from '../TabBar';

const Output = () => {
	const { queryHistory } = useContext(MainContext);
	const [tab,setTab]=useState(0);
	const exportData = () => {
		console.log('Exporting Data');
	};

	return (
		<div className='query-results'>
			{queryHistory.outputData.length > 0 ? (
				<>
					<TabBar tab={tab} tabs={ ['Output','Table Structure']} onChangeFunc={setTab}></TabBar>
					<div className='query-details'>
						<p>

							<span>
								{tab==0?queryHistory.outputData.length:Object.keys(queryHistory.outputData[0]).length}							
							</span>{' '}
            rows in Set
							<span style={{ fontSize: '0.9rem' }} className='text-1'>
								{' '}
            (0.03sec)
							</span>
						</p>
						<div className='export-button'>
							<CSVLink
								data={queryHistory.outputData}
								filename={'dataOutput.csv'}
							>
								<button onClick={exportData}>
                  Export <span className='fa fa-download'></span>
								</button>
							</CSVLink>
						</div>
					</div>
					
					{tab==0? 
						(<Table result={queryHistory.outputData}>
						</Table>)
						:(<TableSchema data={queryHistory.outputData}></TableSchema>)}
					
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
