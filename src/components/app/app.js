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
				{ name: "Olymp has fallen",viewers: 300, favourite: false,like: false,},
				{ name: "Avengers",viewers: 150, favourite: false, like: false,},
				{ name: "Empire",viewers: 801, favourite: false, like: false,},
				{ name: "Olymp",viewers: 400, favourite: false,like: true,},
				{ name: "Avengers:Endgame",viewers: 200, favourite: false ,like: false,},
			],
			term:'',
			filter:'all',
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
		
	filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewers':
				return arr.filter(c => c.viewers > 200)
			default:
				return arr
		}
	}

	searchHandler = (arr, term) => {
		if (term.length === 0){
			return arr
		}
		
		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	updateTermHandler = term => this.setState({ term })

	updateFilterHandler = filter => this.setState({filter})
	render(){
		const { data, term, filter } = this.state
		const allMoviesCount = data.length
		const favouriteMovies = data.filter(c => c.favourite).length
		const visibleData = this.filterHandler(this.searchHandler(data, term), filter)
		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allMoviesCount={allMoviesCount} favouriteMovies={favouriteMovies}/>
					<div className='search-panel'>
						<SearchPanel updateTermHandler={this.updateTermHandler}/>
						<AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
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
