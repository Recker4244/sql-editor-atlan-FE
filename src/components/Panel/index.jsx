import React,{ useContext } from 'react';
import MainContext from '../../MainContext';
import { contacts } from '../../assets/data/contacts';
import { friends } from '../../assets/data/friends';
import { FaPlay ,FaSave,FaTimesCircle} from 'react-icons/fa';
import './Panel.css';


const EditorPanel = () => {
	const { query, setQueryHistory, setQuery } = useContext(MainContext);

	const runQuery = () => {
		if (query.trim() === '') {
			alert(
				'Please type another query, or select from the ones previously saved.'
			);
			return;
		}
		if (query === 'SELECT * FROM Contacts;') {
			setQueryHistory((prev) => ({
				...prev,
				outputData: contacts,
			}));
		} 
		else if (query === 'SELECT id, first_name, last_name FROM Friends;') {
			setQueryHistory((prev) => ({
				...prev,
				outputData: friends,
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
					<FaPlay/>
				Run
				</button>
			</div>
			<div className='save-button'>
				<button onClick={() => saveQuery()}>
					<FaSave/>Save
				</button>
			</div>
			<div className='clear-button'>
				<button onClick={() => clearQuery()}>
					<FaTimesCircle/>
				Clear
				</button>
			</div>
		</div>
	);
};

export default EditorPanel;
