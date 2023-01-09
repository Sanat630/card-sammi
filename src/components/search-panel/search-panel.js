import { useState } from 'react'
import './search-panel.css'


const SearchPanel = props =>{
	const [term, setTerm] = useState('')

	const updateTermHandler = e =>{
		const term = e.target.value.toLowerCase()
		setTerm(term)
		props.updateTermHandler(term)
	}

	return (
		<input type='text' 
		className='form-control search-input' 
		placeholder='Kinolarni qidirish'
		onChange={updateTermHandler} 
		value={term} />
		)
}

export default SearchPanel;








// class SearchPanel extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {term: ''}	
// 	}

// 	updateTermHandler = e => {
// 		const term = e.target.value.toLowerCase()
// 		this.setState({term})
// 		this.props.updateTermHandler(term)
// 	}

// 	render() {
// 		return (
// 		<input type='text' 
// 		className='form-control search-input' 
// 		placeholder='Kinolarni qidirish'
// 		onChange={this.updateTermHandler} 
// 		value={this.state.term} />
// 		)
// 	}
// }

// export default SearchPanel
