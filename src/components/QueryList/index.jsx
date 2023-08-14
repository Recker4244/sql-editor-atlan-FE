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

	return (
		<div className='query-wrapper'>
			<div className='search-bar'>
				<input
					placeholder='Search...'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			{list.length > 0 ? (
				<div className='query-list'>{renderQueryList(list)}</div>
			) : (
				<div className='placeholder-text'>
					<span className='fa fa-exclamation-circle'></span>
					<p>No queries found.</p>
				</div>
			)}
		</div>
	);
};

export default QueryList;
