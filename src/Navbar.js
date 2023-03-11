
import React from 'react';
import Group1 from './assests/Group1.webp';
import Group from './assests/Group.webp';
import Group2 from './assests/Group2.webp';
import Group5 from './assests/Group5.webp';
import Group6 from './assests/Group6.png';
import Group7 from './assests/Group7.webp';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {


	return (
		<>
		<div className='home-page'>
			<nav className='navbar'>
				<img alt='React-images' id='img'
					src={Group}/>

				<br/>
				<div className='sub-bar'>
					<div className='nav-links'>
						<Link to='dashboard'>
							<img src={Group1}
								alt='React-images'/>
						</Link>
						<p>Dashboard</p>
					</div>

					<div className='nav-links'>
						<a><img src={Group2}
								alt='React-images'/>
						</a>
						<p>CIQ&Scripting</p>
					</div>

					<div className='nav-links'>
						<Link to='subbar'><img src={Group5}
								alt='React-images'/>
						</Link>
						<p>
							UTRAN
						</p>
					</div>

					<div className='nav-links'>
						<a><img src={Group6}
								alt='React-images'/></a>
						<p>
							Integration
						</p>
					</div>

					<div className='nav-links'>
						<a><img src={Group7}
								alt='React-images'/>
						</a>
						<p>
							KPI Montoring
						</p>
					</div>
					
					<span className='border'></span>
			
				</div>
                  													               
                         					                         													
			</nav>
           </div>
		</>
	)
}
export default Navbar