import React from 'react';
import { useState, useMemo } from 'react';
import './EditorPage.css';
import QueryInput from '../../components/QueryInput';
import MainContext from '../../MainContext';
import QueryList from '../../components/QueryList';
import Output from '../../components/Output';

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
		<div className="editor-page">
			<MainContext.Provider value={contextValue}>
				<div className='side-panel'>
					
					<div className='saved-query-panel'>
						<div>
							<h1>Saved Queries</h1>
						</div>
						<QueryList type='saved'/>
					</div>
					<div className='history-query-panel'>
						<div>
							<h1>Query History</h1>
						</div>
						<QueryList type='history'/>
					</div>
				</div>
				
				<div className='editor-components'>
					<QueryInput />
					<Output />
				</div>
				
			</MainContext.Provider>
		</div>
	);
};
export default EditorPage;
