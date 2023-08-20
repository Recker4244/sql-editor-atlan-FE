import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import productImage from '../../assets/images/product.png';
import dataImage from '../../assets/images/data-analysis.svg';
import {FaBolt,FaArrowRight} from 'react-icons/fa';
import NavBar from '../../components/NavBar';



const HomePage = () => {
	const navigate = useNavigate();
	return (
		<div className="home-page">
			<NavBar/>
			<div className="content">
				<img src={productImage} alt="data" width={1200} height={700}/>
				<h1 style={{fontSize:'3rem'}}>Meet  <span style={{color:'#2125d2'}}>SQLizer</span></h1>
				
				<p className='description'>
			SQLizer is a powerful SQL editor tailored for data analysts and professionals
			who work with databases. Whether you&apos;re extracting insights, performing complex
			queries, or visualizing your data, SQLizer provides a comprehensive set of
			features to streamline your workflow.
				</p>
				<div className='features-wrapper'>
					<img src={dataImage} alt="data"/>
					<div className='features'>
						<p style={{color:'#2125d2'}}>Key Features</p>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Intuitive SQL Editor: Write and execute SQL queries effortlessly with our user-friendly interface.</p>
						</div>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Interactive Visualizations: Generate interactive charts and graphs directly from your query results.</p>
						</div>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Data Exploration: Explore your data with intelligent auto-suggestions and syntax highlighting.</p>
						</div>
						<div className='feature'>
							<FaBolt className='icon'/>
							<p>Collaboration: Share queries, visualizations, and results with your team members.</p>
						</div>
					</div>
					
				</div>
				<div className='try-button-wrapper'>
					<button className='try-button' onClick={()=>{navigate('/editor');}}><p>Try It</p><FaArrowRight/></button>
				</div>
			</div>
		</div>
	);
};
  
export default HomePage;
