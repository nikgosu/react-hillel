import {Component} from "react"
import {LeftSideBar} from "./LeftSideBar/LeftSideBar"
import {Details} from "./Details/Details"

export class Todos extends Component {

	state = {
		todos: [
			{id: 1, title: "Water Plants", description:"on the kitchen, dining room and first floor.", completed: true, history: []},
			{id: 2, title: "Pack the bags",description:"preparation for trip to London", completed: false, history: []},
			{id: 3, title: "Charge laptop",description:"preparation for trip to London", completed: false, history: []},
			{id: 4, title: "Post homeworks to Hillel Courses",description:"React Group from 30.04.2022", completed: false, history: []},
			{id: 5, title: "Make backup of HDD",description:"Use TimeMachine for that", completed: false, history: []}
		],
		currentTodo: {},
	};

	getCurrentTodo = (todo) => {
		this.setState(prevState => {
			return {...prevState, currentTodo: todo}
		})
	}

	setCompleteTodo = (todo) => {
		this.setState(prevState => {
			return {...prevState, todos: this.state.todos.map(item => item.id === todo.id ? todo : item)}
		})
	}

	changeDescription = (id, newDescription) => {
		this.setState(prevState => {
			return {...prevState, todos: this.state.todos.map(todo => todo.id === id ? {...todo, description: newDescription} : todo)}
		})
	}

	setHistory = (id, historyItem) => {
		const newState = {...this.state}
		newState.todos.forEach(todo => {
			if (todo.id === id) todo.history.push(historyItem)
		})
		this.setState(newState)
	}

	createTodo = (todo) => {
		this.setState(prevState => {
			return {...prevState, todos: [...prevState.todos, todo]}
		})
	}

	render (){
		return (
			<>
				<LeftSideBar
					createTodo={this.createTodo}
					setCompleteTodo={this.setCompleteTodo}
					getCurrentTodo={this.getCurrentTodo}
					todos={this.state.todos}
				/>
				<Details
					changeDescription={this.changeDescription}
					setHistory={this.setHistory}
					currentTodo={this.state.currentTodo}
				/>
			</>
		)
	}
}