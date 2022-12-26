import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = ({data, onDelete}) => {
	return ( 
		<ul className='movie-list'>
			{data.map( (item, index)=> (
				<MovieListItem 
				name={item.name}
				viewers={item.viewers} 
				favourite={item.favourite} 
				key={index}
				onDelete={() => onDelete(index)}
				/>
				))}
		</ul>
	)
}

export default MovieList
