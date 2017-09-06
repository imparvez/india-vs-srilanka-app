import React, { Component } from 'react'

const MatchesList =(props) => {
	const matchListItem = props.data.map(function(item, index){
		return (
			<li className="list-group-item" key={index}>
				<span className="date-container">{item.date}</span>
				<span className="result-container">{item.result}</span>
				<span className="sriLankaImageContainer">
					<img src="https://ssl.gstatic.com/onebox/media/sports/logos/-6moqr0dxYpIhERhbiVLSA_56x42.png" alt="Sri Lanka"/>
				</span>
				<span className="indiaImageContainer">
					<img src="https://ssl.gstatic.com/onebox/media/sports/logos/mlXOOB9HXxLpoeS2dHSgGA_56x42.png" alt="India"/>
				</span>
				<div className="view-more">
					<p className="synopsis-container">{item.synopsis}</p>
				</div>
			</li>
		)
	});

	return (
		<div>
			<ul className="matches-list list-group">
				{matchListItem}
			</ul>
		</div>
	)
}

export default MatchesList