import React,{useContext} from 'react';
import './QueryInput.css';
import CodeMirror from '@uiw/react-codemirror';
import MainContext from '../../MainContext';
import EditorPanel from '../Panel';
import {sql} from '@codemirror/lang-sql';

const QueryInput=()=> {
	const { query, setQuery } = useContext(MainContext);
	return(<div className='editor'>
		
		<div className='query-input'>
			<CodeMirror
				value={query}
				name='Editor'
				onBeforeChange={(editor, data, value) => setQuery(value)}
				className='code-mirror-wrapper'
				height='100%'
				width='100%'
				align='left'
				autoCapitalize='on'
				basicSetup={
					{
						highlightActiveLine:false,
						highlightActiveLineGutter: false,
						highlightSelectionMatches: true,
						autocompletion: true,
					}
				}
				extensions={[sql(
					{
						schema: {
							tables: [
								{
									name: 'Contacts',
									columns: [
										{ name: 'id', type: 'number' },
										{ name: 'first_name', type: 'string' },
										{ name: 'last_name', type: 'string' },
										{ name: 'email', type: 'string' },
									]
								},
								{
									name: 'Orders',
									columns: [
										{ name: 'id', type: 'number' },
										{ name: 'contact_id', type: 'number' },
										{ name: 'order_date', type: 'date' },
										{ name: 'amount', type: 'number' },
									]
								},
							]
						},
						upperCaseKeywords: true,
					}
				)]}
				options={{
					lint: true,
					mode: 'sql',
					lineNumbers: true,
					keyMap: 'sublime',
					matchBrackets: true,
					addModeClass: true,
					showHint: true,
				}}
				aria-label='code-editor'
			/>
			<p className='note'>
				<strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
			</p>
			<EditorPanel/>
		</div>
		
	</div>);
	
};

export default QueryInput;