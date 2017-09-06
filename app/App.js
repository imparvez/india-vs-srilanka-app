import React, { Component } from 'react'
import MatchesList from './components/MatchesList'

export default class App extends Component {
	render(){
		const matchList = [
			{
				'date' : '14 Feb 2016',
				'result': 'India won by 9 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum'
			}, {
				'date' : '1 Mar 2016',
				'result': 'India won by 5 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum'
			}, {
				'date' : 'Thu, 8 Jun',
				'result': 'Sri Lanka won by 7 wickets',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum'
			}, {
				'date' : 'Wed, 26 Jul',
				'result': 'India won by 304 runs',
				'synopsis': 'Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum. Lorem Ipsum Lorem ipsum Lorem Ipsum'
			}
		]
		return(
			<div className="container">
				<MatchesList data={matchList}/>
			</div>
		)
	}
}
