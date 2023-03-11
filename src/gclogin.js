import React from 'react'
import './gclogin.css'

export default function Gclogin() {
	return (

		<div className='whole-login'>
			<div className='login'>

				<div className='boxes'>
					<label>
						SiteID
					</label>
					<select>
						<option className='select'>
							ALLO0020
						</option>
					</select>
				</div>

				<div className='boxes'>
					<label>
						Account
					</label>
					<select>
						<option className='select'>
							HDFC Bank
						</option>
					</select>
				</div>
				<div className='boxes'>
					<label>
						GC Contact Name
					</label>
					<select>
						<option className='select'>
							Hawkings
						</option>
					</select>
				</div>

				<div className='boxes'>

					<label>
						Planned SoW
					</label>
					<select>
						<option className='select'>
							Cx
						</option>
					</select>
				</div>

				<div className='boxes'>
					<label>
						DTO
					</label>
					<select>
						<option className='select'>
							Yes
						</option>
					</select>
				</div>

				<div className='boxes'>
					<label>
						Market
					</label>
					<select>
						<option className='select'>
							Dellas
						</option>
					</select>
				</div>

				<div className='boxes'>
					<label>
						GC Contact Number
					</label>
					<select>
						<option className='select'>
							123-456-7890
						</option>
					</select>
				</div>

				<div className='boxes'>
					<label>
						GC Contact Name
					</label>
					<select>
						<option className='select'>
							jayasuryan
						</option>
					</select>
				</div>

				<div className='boxes'>

					<label>
						GC Mail ID
					</label>
					<select>
						<option className='select'>
							jayasuryan99@gmail.com
						</option>
					</select>
				</div>


			</div>
			<button type='button' id='btn'>
				Submit
			</button>
		</div>

	)
}
