import {Component} from "react"
import './Details.css'
import {TodoDetails} from "./TodoDetails/TodoDetails"
import {History} from "./History/History"

export class Details extends Component {
	render (){
		return (
			this.props.currentTodo.title ?
				<div className={'details_container'}>
					<TodoDetails changeDescription={this.props.changeDescription} setHistory={this.props.setHistory} currentTodo={this.props.currentTodo}/>
					<History history={this.props.currentTodo.history}/>
				</div>
				:
				<div className={'empty-details'}>Nothing selected</div>
		)
	}
}