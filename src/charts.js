
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import download from './assests/download.png'
import './charts.css'


function Charts() {


	const data = [
		{
			name: 'A',
			lower: 10,
			upper: 20
		},
		{
			name: 'B',
			lower: 15,
			upper: 25
		},
		{
			name: 'C',
			lower: 5,
			upper: 10
		},
		{
			name: 'D',
			lower: 7,
			upper: 14
		}, {
			name: 'E',
			lower: 2,
			upper: 12
		},
	];


	return (
		<div className='charts'>
			<div className='dashboard'>

				<h1>
					Dashboard
				</h1>
			</div>
			<br/>
			<div className='charts-select'>
                <div>
				<span className='chart-radio'>
					<input type='radio'/>
					GC Name
					<input type='radio'/>
					Company
					<input type='radio'/>
					Account
					<input type='radio'/>
					Market
				</span>
                </div>
				<div className='range'>
					<p>
						Range
					</p>
                    <select>
                        <option className='select'>
                                24 hrs
                                </option>
                    </select>
                    <select>
                        <option className='select'>
                                All account
                                </option>
                    </select>
                    <select>
                        <option className='select'>
                                All market
                                </option>
                    </select>
				</div>
			</div>
			<div className='chart'>

				<BarChart width={1200}
					height={300}
					data={data}>
					<CartesianGrid strokeDasharray="3 3"/>
					<XAxis dataKey="name"/>
					<YAxis/>
					<Tooltip/>
					<Legend/>
					<Bar dataKey="lower" stackId="a" fill="#8884d8"/>
					<Bar dataKey="upper" stackId="a" fill="#82ca9d"/>
				</BarChart>
			</div>


			<div id='table'>
                <p>GC Master</p>
				<table border="5">
					<tr>
						<th>
							UTRAN
						</th>
						<th>
							Engineer
						</th>
						<th>
							Shift
						</th>
						<th>
							Crew
						</th>
						<th>
							Market
						</th>
						<th>
							SoW
						</th>
						<th>
							Download
						</th>
					</tr>

					<tr>
						<td>
							UTRAN-2
						</td>
						<td>
							jayasuryan
						</td>
						<td>
							Shift-2
						</td>
						<td>
							Crew-2
						</td>
						<td>
							Market-2
						</td>
						<td>
							Cx
						</td>
						<td>
							<img id='ima1' alt='React-images'
								src={download}/>
						</td>
					</tr>
					<tr>
						<td>
							UTRAN-3
						</td>
						<td>
							vicky
						</td>
						<td>
							Shift-3
						</td>
						<td>
							Crew-3
						</td>
						<td>
							Market-3
						</td>
						<td>
							Cx
						</td>
						<td>
							<img id='ima1' alt='React-images'
								src={download}/>
						</td>
					</tr>
					<tr>
						<td>
							UTRAN-4
						</td>
						<td>
							santhosh
						</td>
						<td>
							Shift-4
						</td>
						<td>
							Crew-4
						</td>
						<td>
							Market-4
						</td>
						<td>
							Cx
						</td>
						<td>
							<img id='ima1' alt='React-images'
								src={download}/>
						</td>
					</tr>
					<tr>
						<td>
							UTRAN-5
						</td>
						<td>
							raghul
						</td>
						<td>
							Shift-5
						</td>
						<td>
							Crew-5
						</td>
						<td>
							Market-5
						</td>
						<td>
							Cx
						</td>
						<td>
							<img id='ima1' alt='React-images'
								src={download}/>
						</td>
					</tr>
				</table>
			</div>
		</div>


	)
}

export default Charts 
