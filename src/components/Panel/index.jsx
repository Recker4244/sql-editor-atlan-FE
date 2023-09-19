import React, { useContext } from 'react';
import MainContext from '../../MainContext';
import { FaPlay, FaSave, FaTimesCircle } from 'react-icons/fa';
import './Panel.css';
import { fetchData } from '../../utils/common';


const EditorPanel = () => {
	const { query, setQueryHistory, setQuery } = useContext(MainContext);

	const runQuery = async () => {
		if (query.trim() === '') {
			alert(
				'Please type another query, or select from the ones previously saved.'
			);
			return;
		}
		if (query === 'SELECT * FROM Customers;') {
			const data = await fetchData('customers');
			setQueryHistory((prev) => ({
				...prev,
				outputData: data,
			}));
		}
		else if (query === 'SELECT * FROM Order_Details;') {
			const data = await fetchData('order_details');
			setQueryHistory((prev) => ({
				...prev,
				outputData: data,
			}));
		}
		else {
			alert('Please try one of the saved queries');
			return;
		}
		setQueryHistory((prev) => ({
			...prev,
			history: [...prev.history, query],
		}));
	};

	const saveQuery = () => {
		if (query.trim() === '') {
			alert('Please enter a query to be saved');
			return;
		}

		setQueryHistory((prev) => ({
			...prev,
			saved: [...prev.saved, query],
		}));
	};

	const clearQuery = () => {
		setQuery('');
	};

	return (
		<div className='editor-panel'>
			<div className='run-button'>
				<button onClick={() => runQuery()}>
					<FaPlay />
					Run
				</button>
			</div>
			<div className='save-button'>
				<button onClick={() => saveQuery()}>
					<FaSave />Save
				</button>
			</div>
			<div className='clear-button'>
				<button onClick={() => clearQuery()}>
					<FaTimesCircle />
					Clear
				</button>
			</div>
		</div>
	);
};

export default EditorPanel;
