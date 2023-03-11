import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './layout';
import Charts from './charts';
import SubBar from './subbar';
import Dashboard from './dashboard';
import Gclogin from './gclogin';

function App() {
	const router = createBrowserRouter(createRoutesFromElements (
		<Route path='/'
			element={<Layout/>}>
			<Route index
				element={<Charts/>}/>
        <Route path='dashboard' element={<Charts/>}/>
			<Route path='subbar'
				element={<SubBar/>}/>
		</Route>
	))
	return (

		<RouterProvider router={router}/>
	);
}

export default App;
