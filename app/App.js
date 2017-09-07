import React, { Component } from 'react'
import MatchesList from './components/MatchesList'

export default class App extends Component {
	render(){
		const matchList = [
			{
				'date' : '14 Feb 2016',
				'result': 'India won by 9 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum',
				'teamAName': 'Sri Lanka',
				'teamAScore': '82/10 (18)',
				'teamBName': 'India',
				'teamBScore': '84/1 (13.5)'
			}, {
				'date' : '1 Mar 2016',
				'result': 'India won by 5 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum',
				'teamAName': 'Sri Lanka',
				'teamAScore': '82/10 (18)',
				'teamBName': 'India',
				'teamBScore': '84/1 (13.5)'
			}, {
				'date' : 'Thu, 8 Jun',
				'result': 'Sri Lanka won by 7 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum',
				'teamAName': 'Sri Lanka',
				'teamAScore': '82/10 (18)',
				'teamBName': 'India',
				'teamBScore': '84/1 (13.5)'
			}, {
				'date' : 'Wed, 26 Jul',
				'result': 'India won by 304 runs',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum',
				'teamAName': 'Sri Lanka',
				'teamAScore': '82/10 (18)',
				'teamBName': 'India',
				'teamBScore': '84/1 (13.5)'
			}
		]
		return(
			<div className="container">
				<MatchesList data={matchList}/>
			</div>
		)
	}
}
