import LocalizedStrings from 'localized-strings'
import axios from 'axios'

const main = async (data) => {
	const langs = Object.keys(data)
	const langIncluded = langs.includes(window.navigator.language.slice(0,2))
	console.log('langs', langs, langIncluded)
	 
	if(langIncluded) return new LocalizedStrings(data)
	else {
		const res = await axios.post('api/lang', {data: data[langs[0]], target: window.navigator.language}).then(data => data.data)
		data[window.navigator.language] = res
		console.log('response', res)
		console.log('data',data)
		return new LocalizedStrings(data)
	}
}

module.exports = main