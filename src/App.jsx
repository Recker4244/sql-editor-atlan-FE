import React,{Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';

const HomePage=lazy(() => import('./pages/HomePage/index.jsx'));
const EditorPage=lazy(() => import('./pages/EditorPage/index.jsx'));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Routes>
						<Route path='*' element={<HomePage/>} />
						<Route path='/editor' element={<EditorPage />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
