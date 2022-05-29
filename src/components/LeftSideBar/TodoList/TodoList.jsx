import {Component} from "react"
import './TodoList.css'
import {TodoItem} from "../TodoItem/TodoItem"

export class TodoList extends Component {
	constructor (props){
		super(props)
	}
	render (){
		return (
			<div className={'container'}>
				{this.props.todos.map(todo => (
					<TodoItem setCompleteTodo={this.props.setCompleteTodo} getCurrentTodo={this.props.getCurrentTodo} todo={todo} key={todo.id}/>
				))}
			</div>
		)
	}
}