import {Component} from "react"
import {Header} from "./Header/Header"
import './LeftSideBar.css'
import {Search} from "./Search/Search"
import {TodoList} from "./TodoList/TodoList"
import {CreateTodoForm} from "./CreateTodoFrom/CreateTodoForm"

export class LeftSideBar extends Component {
	render (){
		return (
			<div className={'left-side-bar'}>
				<Header/>
				<Search/>
				<TodoList setCompleteTodo={this.props.setCompleteTodo} getCurrentTodo={this.props.getCurrentTodo} todos={this.props.todos}/>
				<CreateTodoForm createTodo={this.props.createTodo}/>
			</div>
		)
	}
}