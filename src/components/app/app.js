import { Component, setState, state } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

 class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [ 
				{ name: "Empire of Osman!",viewers: 988, favourite: false,},
				{ name: "Olymp has fallen",viewers: 100, favourite: false},
				{ name: "Avengers",viewers: 100, favourite: true},
				{ name: "Empire of Osman",viewers: 988, favourite: false},
				{ name: "Olymp has fallen",viewers: 100, favourite: false},
				{ name: "Avengers",viewers: 100, favourite: true},
			],
		}
	}
	

	onDelete = key => {
		console.log(key);
		this.setState(({data}) => {
			const newArr = data.filter((e, index)=> index !== key)
			console.log(data);
			return{
				data: newArr,
			}
		})
	}

	addForm = item => {
		this.setState(({data}) => ({
			data: [...data, {...item, favourite: false, like: false,}]
		}))
	}
	

	render(){
		const { data } = this.state

		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data} onDelete={this.onDelete}/>
					<MoviesAddForm addForm={this.addForm}/>
				</div>
			</div>
		)
	}
}

export default App
