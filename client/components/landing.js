import React from 'react'
import util from '../util'

class Landing extends React.Component {
	constructor(){
		super()
		this.state = {
			title: 'Waiting...'
		}
		this.getLocale = this.getLocale.bind(this)
	}

	componentDidMount(){
		this.getLocale()
	}

	async getLocale(){
		const data = {gb: {title: 'Hallo Welt'}}
		const result = await util(data)
	
		this.setState({title: result.title})
	}

	render(){
		console.log(window.navigator.language)
		return (
		<div>
			<h1>{this.state.title}</h1>
		</div>
		)
	}
}

export default Landing
