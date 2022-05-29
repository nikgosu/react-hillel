import {Component} from "react"
import './TodoDetails.css'

export class TodoDetails extends Component {

	state = {
		prevDescription: this.props.currentTodo.description,
		currentDescription: this.props.currentTodo.description,
	}

	saveHistory = () => {
		this.props.setHistory(this.props.currentTodo.id, {
			description: `Changed task description from "${this.state.prevDescription}" to "${this.state.currentDescription}"`,
			date: `${(new Date()).toDateString()} ${new Date().toLocaleTimeString()}`
		})
		this.props.changeDescription(this.props.currentTodo.id, this.state.currentDescription)
	}

	handleChangeDescription = (e) => {
		this.setState(prevState => {
			return {...prevState, currentDescription: e.target.value}
		})
	}

	componentDidUpdate (prevProps, prevState, snapshot){
		if (prevProps.currentTodo.id !== this.props.currentTodo.id) {
			this.setState(prevState => {
				return {...prevState, currentDescription: this.props.currentTodo.description}
			})
		}
	}

	render (){
		return (
			<div className={'todo-details'}>
				<h2>{this.props.currentTodo.title}</h2>
				<textarea
					value={this.state.currentDescription}
					onChange={this.handleChangeDescription}
					rows="7"
				/>
				<button onClick={this.saveHistory}>Save</button>
			</div>
		)
	}
}