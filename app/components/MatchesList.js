import React, { Component } from 'react'

export default class MatchesList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            open: false,
            class: 'section'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        console.log('e =>', e);
		
		if(this.state.open){
			this.setState({
				open: false,
				class: 'section'
			});
		} else {
			this.setState({
				open: true,
				class: 'section open'
			})
		}
    } 

    render(){
        let handleClickEvent = this.handleClick;
        let sectionClass = this.state.class;
        const matchListItem = this.props.data.map(function(item, index){
            return (
                <li className="list-group-item" key={index}>
                    <span className="date-container">{item.date}</span>
                    <span className="sriLankaImageContainer">
                        <img src="https://ssl.gstatic.com/onebox/media/sports/logos/-6moqr0dxYpIhERhbiVLSA_56x42.png" alt="Sri Lanka"/>
                    </span>
                    <span className="indiaImageContainer">
                        <img src="https://ssl.gstatic.com/onebox/media/sports/logos/mlXOOB9HXxLpoeS2dHSgGA_56x42.png" alt="India"/>
                    </span>
                    <span className="result-container">{item.result}</span>
                    <div className={`view-more ${sectionClass}`} onClick={handleClickEvent} >
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
}