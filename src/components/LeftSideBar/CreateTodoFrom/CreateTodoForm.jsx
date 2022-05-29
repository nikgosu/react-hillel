import {Component} from "react"
import './CreateTodoForm.css'
import {nanoid} from "nanoid"

export class CreateTodoForm extends Component {

	state = {
		title: '',
		id: nanoid(),
		description: '',
		completed: false,
		history: []
	}

	handleCreateTodo = () => {
		this.props.createTodo({...this.state, history: [{
				description: `Created task ${this.state.title}`,
				date: `${(new Date()).toDateString()} ${new Date().toLocaleTimeString()}`
			}]})
	}

	handleChangeTitle = (e) => {
		this.setState(prevState => {
			return {...prevState, title: e.target.value}
		})
	}

	render (){
		return (
			<div className="create-form">
				<div className="create-form_actions">
					<textarea value={this.state.title} onChange={this.handleChangeTitle} placeholder={'what you need to do?'} rows="3"/>
					<button onClick={this.handleCreateTodo}>+</button>
				</div>
			</div>
		)
	}
}