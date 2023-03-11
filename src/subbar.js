import React from 'react'
import './subbar.css'
import Dashboard from './dashboard'
import Gclogin from './gclogin'

function SubBar() {

	return (
		<div>
			<div id='sub'>
				<div className='bars'>
					<p>Dashboard</p>
				</div>
				<div className='bars'>
					<p>GC Login</p>
				</div>
				<div className='bars'>
					<p>Health Check</p>
				</div>
			</div>
			<div>
				{/* <Dashboard/> */}
				<Gclogin/>
			</div>
		</div>
	)
}

export default SubBar
