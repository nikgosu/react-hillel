import {Component} from "react"
import './TodoItem.css'

export class TodoItem extends Component {
	state = {...this.props.todo}

	handleCompleteTodo = (e) => {
		e.stopPropagation()
		this.setState(prevState => {
			return {...prevState, completed: !prevState.completed}
		})
	}

	componentDidUpdate (prevProps, prevState, snapshot){
		if (prevState.completed !== this.state.completed) this.props.setCompleteTodo(this.state)
	}

	render (){
		return (
			<div className="todo-item" onClick={() => this.props.getCurrentTodo(this.props.todo)}>
				<div className={`todo-item_action`}>
					<span onClick={this.handleCompleteTodo}>{this.props.todo.completed ? '✔️' : ''}</span>
				</div>
				<div className={this.props.todo.completed ? 'todo-item__content completed' : 'todo-item__content'}>
					<h4>{this.props.todo.title}</h4>
					<p>{this.props.todo.description}</p>
				</div>
			</div>
		)
	}
}