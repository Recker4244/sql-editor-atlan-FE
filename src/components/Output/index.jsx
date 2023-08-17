import { useContext,React,useState} from 'react';
import MainContext from '../../MainContext';
import Table from '../Table/index';
import { CSVLink } from 'react-csv';
import './Output.css';
import TableSchema from '../TableSchema';
import TabBar from '../TabBar';
import { FaDownload} from 'react-icons/fa';
import Visualisation from '../Visualisation';

const Output = () => {
	const { queryHistory } = useContext(MainContext);
	const [tab,setTab]=useState(0);
	const exportData = () => {
		console.log('Exporting Data');
	};

	const getTab=()=>{
		switch (tab) {
		case 0:
			return (<Table result={queryHistory.outputData}>
			</Table>);
		case 1:
			return (<TableSchema data={queryHistory.outputData}></TableSchema>);

		case 2:
			return <Visualisation data={queryHistory.outputData}/>;
		
		default:
			break;
		}
	};

	return (
		<div className='query-results'>
			{queryHistory.outputData.length > 0 ? (
				<>
					<TabBar tab={tab} tabs={ ['Output','Table Structure','Visualisation']} onChangeFunc={setTab}></TabBar>
					<div className='query-details'>
						
						{tab==0||tab==1?<p>

							<span>
								{tab==0?queryHistory.outputData.length:Object.keys(queryHistory.outputData[0]).length}							
							</span>{' '}
            rows in Set
							<span style={{ fontSize: '0.9rem' }} className='text-1'>
								{' '}
            (0.03sec)
							</span>
						</p>:null}
						{tab==0||tab==1?
							<div className='export-button-wrapper'>
								<CSVLink className='export-button'
									data={queryHistory.outputData}
									filename={'dataOutput.csv'}
								>
									<button onClick={exportData}>
                  Export <FaDownload/>
									</button>
								</CSVLink>
							</div>:null}
						
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
