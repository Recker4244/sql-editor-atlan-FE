import React,{useContext} from 'react';
import './QueryInput.css';
import CodeMirror from '@uiw/react-codemirror';
import MainContext from '../../MainContext';
import EditorPanel from '../Panel';

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
			<p className='note'
				style={{ fontSize: '0.8rem' }} >
				<strong>NOTE: </strong>Click on a Previously Saved Query to Begin.
			</p>
			<EditorPanel/>
		</div>
		
	</div>);
	
};

export default QueryInput;