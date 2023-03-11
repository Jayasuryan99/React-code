import React from 'react'
import './subbar.css'
// import Dashboard from './dashboard'
// import Gclogin from './gclogin'
// import Health from './health'
import { Link, Outlet } from 'react-router-dom'

function SubBar() {

	return (
		<div>
			<div id='sub'>
				<div className='bars'>
					<Link to='dashboard' style={{textDecoration:'none'}}>Dashboard</Link>
				</div>
				<div className='bars'>
					<Link to='gclogin' style={{textDecoration:'none'}}>GC Login</Link>
				</div>
				<div className='bars'>
					<Link to='health' style={{textDecoration:'none'}}>Health Check</Link>
				</div>
				<Outlet/>
			</div>
			<div>
				{/* <Dashboard/> */}
				{/* <Gclogin/> */}
				{/* <Health/> */}
			</div>
		</div>
	)
}

export default SubBar
