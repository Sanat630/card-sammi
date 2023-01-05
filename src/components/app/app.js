import { Component} from 'react'
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
				{ name: "Empire of Osman!",viewers: 988, favourite: false,like: false,},
				{ name: "Olymp has fallen",viewers: 100, favourite: false,like: false,},
				{ name: "Avengers",viewers: 100, favourite: false, like: false,},
				{ name: "Empire of Osman",viewers: 988, favourite: false, like: false,},
				{ name: "Olymp has fallen",viewers: 100, favourite: false,like: true,},
				{ name: "Avengers",viewers: 100, favourite: false ,like: false,},
			],
			term:'',
		}
	}
	
	onDelete = key => {
		this.setState(({data}) => {
			const newArr = data.filter((e, index)=> index !== key)
			console.log(data);
			return{
				data: newArr,
			}
		})
	}

	addForm = item => {
		const newItem = { 
			name: item.name,
			viewers: item.viewers,
			key: item.index, 
			favourite: false, 
			like: false,
		};
		console.log(newItem);
		this.setState(({data}) => ({
			data: [...data, newItem]
		}))
	}
	
	onToggleProp = (key, prop) => {
		console.log(prop);
		this.setState(({data}) => {
			const newArr = data.map((item, index) => {
				if (index === key){
					return{ ...item, [prop]: !item[prop]}
				}
				return item
			})
			return {
				data:newArr,
			}
		})
	}

	searchHandler = (arr, term) => {
		if (term.length === 0){
			return arr
		}
		
		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	updateTermHandler = term => this.setState({ term })

	render(){
		const { data, term } = this.state
		const allMoviesCount = data.length
		const favouriteMovies = data.filter(c => c.favourite).length
		const visibleData = this.searchHandler(data, term)
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allMoviesCount={allMoviesCount} favouriteMovies={favouriteMovies}/>
					<div className='search-panel'>
						<SearchPanel updateTermHandler={this.updateTermHandler}/>
						<AppFilter />
					</div>
					<MovieList 
					onToggleProp={this.onToggleProp}  
					data={visibleData} 
					onDelete={this.onDelete}/>
					<MoviesAddForm addForm={this.addForm}/>
				</div>
			</div>
		)
	}
}

export default App
