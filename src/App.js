import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './layout';
import Charts from './charts';
import SubBar from './subbar';
import Dashboard from './dashboard';
import Gclogin from './gclogin';
import Health from './health';

function App() {
	const router = createBrowserRouter(createRoutesFromElements (
		<Route path='/'
			element={<Layout/>}>
			<Route index
				element={<Charts/>}/>
        <Route path='dashboard' element={<Charts/>}/>
			<Route path='subbar'
				element={<SubBar/>}>
					<Route index element={<Dashboard/>}/>
					<Route path='dashboard' element={<Dashboard/>}/>
					<Route path='gclogin' element={<Gclogin/>}/>
					<Route path='health' element={<Health/>}/>
				</Route>
		</Route>
	))
	return (

		<RouterProvider router={router}/>
	);
}

export default App;
