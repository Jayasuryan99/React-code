import React from 'react'
import './subbar.css'
import Dashboard from './dashboard'

function SubBar() {

	return (
		<div>
			<div className='sub'>
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
				<Dashboard/>
			</div>
		</div>
	)
}

export default SubBar
