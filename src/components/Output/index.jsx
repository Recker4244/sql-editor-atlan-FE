import { useContext,React} from 'react';
import MainContext from '../../MainContext';
import Table from '../Table/index';
import { CSVLink } from 'react-csv';
import './Output.css';

const Output = () => {
	const { queryHistory } = useContext(MainContext);

	const exportData = () => {
		console.log('Exporting Data');
	};

	return (
		<div className='query-results'>
			{queryHistory.outputData.length > 0 ? (
				<>
					<div className='query-details'>
						<p>
							<span>
								{queryHistory.outputData.length}							
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
					<Table result={queryHistory.outputData}></Table>
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
