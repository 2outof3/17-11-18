import LocalizedStrings from 'localized-strings'
import axios from 'axios'

const main = async (data) => {
	const langs = Object.keys(data)
	const langIncluded = langs.includes(window.navigator.language.slice(0, 2))
	console.log('langs', langs, langIncluded)

	if (langIncluded) {return new LocalizedStrings(data)}
	else {
		console.log(data[langs[0]], window.navigator.language, 'aquí')
		const res = await axios.post('api/lang', {data: data[langs[0]], target: window.navigator.language.slice(0, 2)}).then(data => data.data)
		data[window.navigator.language.slice(0, 2)] = res
		console.log('response', res)
		console.log('data', data)
		return new LocalizedStrings(data)
	}
}

module.exports = main
