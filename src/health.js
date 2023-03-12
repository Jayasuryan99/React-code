import React from 'react'
import img from './assests/img.png';
import './health.css'

export default function Health() {
	return (
		<div className='whole-list'>
			<div className='health-Check'>
				<input type='radio'/>
				Run Pre-Check Tool
				<input type='radio'/>
				Run Post-Check Tool
			</div>
			<div className='wholemail'>
				<div className='from'>
					<label>
						From Mail
					</label>
					<input type='text'/>
				</div>
				<div className='to'>
					<label>
						To Mail
					</label>
					<input type='text'/>
				</div>

			</div>

			<div className='table'>
				<table border='4'>
					<tr>
						<th>
							S.No
						</th>
						<th>
							Node ID
						</th>
						<th>
							Type
						</th>
						<th></th>
					</tr>
					<tr>
						<td>
							1
						</td>
						<td>
							CL00987
						</td>
						<td>
							LTE
						</td>
						<td>
							<img src={img}
								alt='React-images'
								id='img'/>
						</td>
					</tr>
					<tr>
						<td>
							2
						</td>
						<td>
							CL00957
						</td>
						<td>
							LTE
						</td>
						<td>
							<img src={img}
								alt='React-images'
								id='img'/>
						</td>
					</tr>
					<tr>
						<td>
							3
						</td>
						<td>
							CL00967
						</td>
						<td>
							LTE
						</td>
						<td>
							<img src={img}
								alt='React-images'
								id='img'/>
						</td>
					</tr>
					<tr>
						<td>
							4
						</td>
						<td>
							CL00997
						</td>
						<td>
							LTE
						</td>
						<td>
							<img src={img}
								alt='React-images'
								id='img'/>
						</td>
					</tr>

				</table>
			</div>

			<div id='btn'>
				<button type='submit'>Fetch log</button>
			</div>

		</div>

	)
}
