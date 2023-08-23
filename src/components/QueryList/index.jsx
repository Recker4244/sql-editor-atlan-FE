import { React,useContext, useEffect, useState } from 'react';
import MainContext from '../../MainContext';
import { Query } from '../Query';
import './QueryList.css';

const QueryList = (props) => {
	const { setQuery, queryHistory } = useContext(MainContext);
	const [searchQuery, setSearchQuery] = useState('');
	const [list, setList] = useState(queryHistory[props.type]);

	const renderQueryList = (array) => {
		return array.map((i,index) => {
			return (
				<Query key={index} onClickFunc={()=>{setQuery(i);}} code={i}></Query>
			);
		});
	};

	useEffect(() => {
		setList(queryHistory[props.type]);
	}, [props, queryHistory]);

	useEffect(() => {
		setList(
			queryHistory[props.type].filter((i) =>
				i.toLowerCase().includes(searchQuery.toLowerCase())
			)
		); // eslint-disable-next-line
  }, [searchQuery]);

	const queryResult=()=>{
		if(queryHistory[props.type].length==0)
			return (<div>
			</div>);
		if(list.length===0){
			return (<div><p>
				No queries found</p>
			</div>);
		}
		return (<div className='query-list'>{renderQueryList(list)}</div>);
	};

	return (
		<div className='query-wrapper'>
			<div className='search-bar'>
				<input
					placeholder='Search...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			{queryResult()}
		</div>
	);
};

export default QueryList;
