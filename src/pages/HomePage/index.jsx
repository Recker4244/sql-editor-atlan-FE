import React from 'react';
import './HomePage.css';
import dataImage from '../../assets/images/data-analysis.svg';
import {FaBolt} from 'react-icons/fa';

const HomePage = () => {
	return (
		<div className="home-page">
			<div className="page-content">
				<h1>Meet <span style={{color:'#2125d2'}}>SQLizer</span></h1>
				
				<p>
			SQLizer is a powerful SQL editor tailored for data analysts and professionals
			who work with databases. Whether you&apos;re extracting insights, performing complex
			queries, or visualizing your data, SQLizer provides a comprehensive set of
			features to streamline your workflow.
				</p>
				<div className='features-wrapper'>
					<img src={dataImage} alt="data"/>
					<div className='features'>
						<h2 style={{color:'#2125d2'}}>Key Features</h2>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Intuitive SQL Editor: Write and execute SQL queries effortlessly with our user-friendly interface.</p>
						</div>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Interactive Visualizations: Generate interactive charts and graphs directly from your query results.</p>
						</div>
						<div className='feature'>
							<div className='bullet'><FaBolt className='icon'/></div>
							
							<p>Data Exploration: Explore your data with intelligent auto-suggestions and syntax highlighting.</p>
						</div>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Collaboration: Share queries, visualizations, and results with your team members.</p>
						</div>
					</div>
					
				</div>
				
				{/* <h2>Why Choose SQLizer?</h2>
				<p>
			SQLizer is designed to empower data analysts to work more efficiently and effectively.
			With its comprehensive features, user-friendly interface, and seamless integration with various
			data sources, you&apos;ll be able to take your data analysis to the next level.
				</p>
				<p>
			Whether you&apos;re a seasoned data professional or just starting your journey in data analysis,
			SQLizer is your trusted companion for transforming raw data into actionable insights.
				</p> */}
			</div>
		</div>
	);
};
  
export default HomePage;
