import React from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Pages from './pages/index.js';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<Pages.HomePage />} />
					<Route path='/editor' element={<Pages.EditorPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
