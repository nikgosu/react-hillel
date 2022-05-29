import {Component} from "react"
import './Search.css'

export class Search extends Component {
	render (){
		return (
			<div className={'search'}>
				<input type="text" placeholder={'Search'}/>
			</div>
		)
	}
}