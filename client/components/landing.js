import React from 'react'
import util from '../util'

class Landing extends React.Component {
	constructor(){
		super()
		this.state = {
			title: 'Waiting...',
			intro: '...words...',
			content: '...loading...'
		}
		this.getLocale = this.getLocale.bind(this)
	}

	componentDidMount(){
		this.getLocale()
	}

	async getLocale(){
		const data = {gb: {title: 'Hallo Welt!', intro: 'Und jetzt höre diese Worte der Weisheit...', content: 'Nehmen Sie die Krone ab. Soziale Netzwerke bestimmen nicht das Kaliber einer Person. Du sagst, ich war Reggaeton. Sag auch, dass ich Tango war. Bossa Nova, Cumbia, Batucada, Mambo. Fusion ist das Konzept!'}}
		const result = await util(data)
		this.setState({title: result.title, intro: result.intro, content: result.content})
	}

	render(){
		return (
		<div>
			<h1 className="greeting">{this.state.title}</h1>
			<h5 className="intro">{this.state.intro}</h5>
			<h4 className="quote">"{this.state.content}"</h4>
			<h5 className="close">-Residente</h5>
		</div>
		)
	}
}

export default Landing
