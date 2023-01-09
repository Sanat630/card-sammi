import {useState, useEffect} from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'


const App = () =>{
	const [data, setData] = useState([])
	const [term, setTerm] = useState('')
	const [filter, setFilter] = useState('all')

	const onDelete = key => {
		const newArr = data.filter(index => index !== key)
		setData(newArr)
	}

	const addForm = item => {
		const newItem = { 
			name: item.name,
			viewers: item.viewers,
			key: item.index, 
			favourite: false, 
			like: false,
		}
		const newArr = [...data, newItem]
		setData(newArr)
	}

	const onToggleProp = (key, prop) => {
	const newArr = data.map((item, index) => {
				if (index === key){
					return{ ...item, [prop]: !item[prop]}
				}
				return item
			})
		setData(newArr)
	}

	const searchHandler = (arr, term) => {
		if(term ===0 ){
			return arr
		}

		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1) 
	}
	const filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewers':
				return arr.filter(c => c.viewers > 200)
			default:
				return arr
		}
	}

	const updateTermHandler = term => setTerm(term)

	const updateFilterHandler = filter => setFilter(filter)

	useEffect (() => {
		fetch('https://jsonplaceholder.typicode.com/todos/?_start=0&_limit=10')
		.then(response => response.json())
		.then(json => {
			const newArr = json.map((item, key) => ({
			name: item.title, 
			id: key,
			viewers: key * 25, 
			favourite: false,
			like: false,
		}))
		setData(newArr)
		console.log(newArr);
	})
	.catch(err => console.log(err))
},[])
	return (
     	<div className='app font-monospace'>
     		<div className='content'>
     			<AppInfo allMoviesCount={data.length} favouriteMovies={data.filter(c => c.favourite).length}/>
     			<div className='search-panel'>
     				<SearchPanel updateTermHandler={updateTermHandler}/>
     				<AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
     			</div>
     			<MovieList 
     			onToggleProp={onToggleProp}  
     			data={filterHandler(searchHandler(data, term), filter)} 
     			onDelete={onDelete}/>
     			<MoviesAddForm addForm={addForm}/>
     		</div>
     	</div>
     )
}

export default App

















//  class App extends Component {
// 	constructor(props){
// 		super(props)
// 		this.state = {
// 			data: [ 
// 				{ name: "Empire of Osman!",viewers: 988, favourite: false,like: false,},
// 				{ name: "Olymp has fallen",viewers: 300, favourite: false,like: false,},
// 				{ name: "Avengers",viewers: 150, favourite: false, like: false,},
// 				{ name: "Empire",viewers: 801, favourite: false, like: false,},
// 				{ name: "Olymp",viewers: 400, favourite: false,like: true,},
// 				{ name: "Avengers:Endgame",viewers: 200, favourite: false ,like: false,},
// 			],
// 			term:'',
// 			filter:'all',
// 		}
// 	}
	
// 	onDelete = key => {
// 		this.setState(({data}) => {
// 			const newArr = data.filter((e, index)=> index !== key)
// 			console.log(data);
// 			return{
// 				data: newArr,
// 			}
// 		})
// 	}

// 	addForm = item => {
// 		const newItem = { 
// 			name: item.name,
// 			viewers: item.viewers,
// 			key: item.index, 
// 			favourite: false, 
// 			like: false,
// 		};
// 		console.log(newItem);
// 		this.setState(({data}) => ({
// 			data: [...data, newItem]
// 		}))
// 	}
	
// 	onToggleProp = (key, prop) => {
// 		console.log(prop);
// 		this.setState(({data}) => {
// 			const newArr = data.map((item, index) => {
// 				if (index === key){
// 					return{ ...item, [prop]: !item[prop]}
// 				}
// 				return item
// 			})
// 			return {
// 				data:newArr,
// 			}
// 		})
// 	}
		
// 	filterHandler = (arr, filter) => {
// 		switch (filter) {
// 			case 'popular':
// 				return arr.filter(c => c.like)
// 			case 'mostViewers':
// 				return arr.filter(c => c.viewers > 200)
// 			default:
// 				return arr
// 		}
// 	}

// 	searchHandler = (arr, term) => {
// 		if (term.length === 0){
// 			return arr
// 		}
		
// 		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
// 	}

// 	updateTermHandler = term => this.setState({ term })

// 	updateFilterHandler = filter => this.setState({filter})
// 	render(){
// 		const { data, term, filter } = this.state
// 		const allMoviesCount = data.length
// 		const favouriteMovies = data.filter(c => c.favourite).length
// 		const visibleData = this.filterHandler(this.searchHandler(data, term), filter)
// 		return (
// 			<div className='app font-monospace'>
// 				<div className='content'>
// 					<AppInfo allMoviesCount={allMoviesCount} favouriteMovies={favouriteMovies}/>
// 					<div className='search-panel'>
// 						<SearchPanel updateTermHandler={this.updateTermHandler}/>
// 						<AppFilter filter={filter} updateFilterHandler={this.updateFilterHandler} />
// 					</div>
// 					<MovieList 
// 					onToggleProp={this.onToggleProp}  
// 					data={visibleData} 
// 					onDelete={this.onDelete}/>
// 					<MoviesAddForm addForm={this.addForm}/>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// export default App
