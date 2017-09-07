import React, { Component } from 'react'
import Collapsible from 'react-collapsible'

export default class MatchesList extends Component {
    constructor(props){
        super(props);
    }

    render(){
    	const teamASmallImage = 'https://ssl.gstatic.com/onebox/media/sports/logos/-6moqr0dxYpIhERhbiVLSA_56x42.png';
    	const teamBSmallImage = 'https://ssl.gstatic.com/onebox/media/sports/logos/mlXOOB9HXxLpoeS2dHSgGA_56x42.png';

    	const teamALargeImage = 'https://ssl.gstatic.com/onebox/media/sports/logos/-6moqr0dxYpIhERhbiVLSA_96x72.png';
    	const teamBLargeImage = 'https://ssl.gstatic.com/onebox/media/sports/logos/mlXOOB9HXxLpoeS2dHSgGA_96x72.png';

        const matchListItem = this.props.data.map(function(item, index){
            return (
                <li className="list-group-item" key={index}>
                    <span className="date-container col-md-4 col-sm-12 col-lg-4">{item.date}</span>

                    <div className="image-container col-md-4 col-sm-12 col-lg-4">
	                    <span className="sriLankaImageContainer">
	                        <img src={teamASmallImage} alt={item.teamAName}/>
	                    </span>
	                    <span className="indiaImageContainer">
	                        <img src={teamBSmallImage} alt={item.teamBName}/>
	                    </span>
                    </div>

                    <span className="result-container col-md-4 col-sm-12 col-lg-4">{item.result}</span>
                    
                    <Collapsible trigger="Schedule & Scores" className="">
                        <div className={`view-more`} >
                            <p className="synopsis-container">
                            	<div className="teamAScoreContainer col-sm-4">
                            		<span className="teamAName">{item.teamAName}</span>
                            		<span className="teamAImageContainer">
                            			<img src={teamALargeImage} alt={item.teamAName}/>
                            		</span>
                            	</div>
                            	<span className="col-sm-4">vs</span>
                            	<div className="teamBScoreContainer col-sm-4">
                            		<span className="teamBName">{item.teamBName}</span>
                            		<span className="teamBImageContainer">
                            			<img src={teamBLargeImage} alt={item.teamBName}/>
                            		</span>
                            	</div>
                            	<span className="result">{item.result}</span>
                            </p>
                        </div>
                    </Collapsible>
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
}