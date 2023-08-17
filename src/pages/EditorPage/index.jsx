import React from 'react';
import { useState, useMemo } from 'react';
import './EditorPage.css';
import QueryInput from '../../components/QueryInput';
import MainContext from '../../MainContext';
import QueryList from '../../components/QueryList';
import Output from '../../components/Output';
import { FaCloud, FaHistory } from 'react-icons/fa';
import NavBar from '../../components/NavBar';

const EditorPage = () => {
	const [query, setQuery] = useState('SELECT * FROM Contacts;');
	const [queryHistory, setQueryHistory] = useState({
		saved: ['SELECT * FROM Contacts;', 'SELECT id, first_name, last_name FROM Contacts;'],
		history: ['SELECT * FROM Contacts;'],
		outputData: [],
	});
	const contextValue = useMemo(
		() => ({ query, setQuery, queryHistory, setQueryHistory }),
		[query, queryHistory]
	);

	return (
		<div className="editor-page-wrapper">
			<NavBar/>
			<MainContext.Provider value={contextValue}>
				<div className='editor-page'>
					<div className='side-panel'>
					
						<div className='saved-query-panel'>
							<div className='heading'>
								<FaCloud className='icon'/>
								<p>Saved Queries</p>
							</div>
							<QueryList type='saved'/>
						</div>
						<div className='history-query-panel'>
							<div className='heading'>
								<FaHistory className='icon'/>
								<p>Query History</p>
							</div>
							<QueryList type='history'/>
						</div>
					</div>
				
					<div className='editor-components'>
						<QueryInput />
						<Output />
					</div>
				</div>
				
				
			</MainContext.Provider>
		</div>
	);
};
export default EditorPage;
