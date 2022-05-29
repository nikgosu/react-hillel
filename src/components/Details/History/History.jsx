import {Component} from "react"
import './History.css'

export class History extends Component {
	constructor (props){
		super(props)
	}
	render (){
		return (
			<div className={'todo-history'}>
				<h2>History</h2>
				{this.props.history ?
					this.props.history.map(item => (
						<div className="history-container">
							<p>{item.description}</p>
							<span>{item.date}</span>
						</div>
					))
					:
					<></>
				}
			</div>
		)
	}
}