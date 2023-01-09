import { useState} from 'react'
import './movies-add-form.css'

const MoviesAddForm = ({addForm}) =>{
	const [state, setState] = useState({ name: "", views: "",})

	const changeHandlerInput = e => {
		setState({...state, [e.target.name]: e.target.value,})
	}

	const addFormHandler = e =>{
		e.preventDefault()
		if(state.name === '' || state.views === '' ) return
		const data = {name: state.name, viewers: state.views,}
		addForm(data)
		setState({name: "", views: "",})
	}

	return (
		<div className='app-add-form'>
			<h3>Yangi kino qo'shish</h3>
			<form className='add-form d-flex' onSubmit={addFormHandler}>
				<input type='text' 
				className='form-control new-post-label' 
				placeholder='Qanday kino?' 
				onChange={changeHandlerInput} 
				name='name'
				value={state.name}
				/>
				<input type='number' 
				className='form-control new-post-label' 
				placeholder="Nechi marotaba ko'rilgan?" 
				onChange={changeHandlerInput}  
				name="views" 
				value={state.views}
				/>

				<button type='submit' className='btn btn-outline-dark'>
					Qo'shish
				</button>
			</form>
		</div>
	)
}
export default MoviesAddForm;

// class MoviesAddForm extends Component{
// 	constructor(props){
// 		super(props)
// 			this.state ={
// 				name: "",
// 				views: "",
// 			}
// 	}


// 	changeHandlerInput = e => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 		})
// 	}

// 	addFormHandler = e =>{
// 		e.preventDefault()
// 		this.props.addForm({name: this.state.name, viewers: this.state.views,})
// 		this.setState({
// 			name: '',
// 			views: '',
// 			key: this.state.index,
// 		})
// 	}
// 	render() {
// 		const {name, views} = this.state
// 		return (
// 			<div className='app-add-form'>
// 				<h3>Yangi kino qo'shish</h3>
// 				<form className='add-form d-flex' onSubmit={this.addFormHandler}>
// 					<input type='text' 
// 					className='form-control new-post-label' 
// 					placeholder='Qanday kino?' 
// 					onChange={this.changeHandlerInput} 
// 					name='name'
// 					value={name}
// 					/>
// 					<input type='number' 
// 					className='form-control new-post-label' 
// 					placeholder="Nechi marotaba ko'rilgan?" 
// 					onChange={this.changeHandlerInput}  
// 					name="views" 
// 					value={views}
// 					/>
	
// 					<button type='submit' className='btn btn-outline-dark'>
// 						Qo'shish
// 					</button>
// 				</form>
// 			</div>
// 		)}
// }


// export default MoviesAddForm;

