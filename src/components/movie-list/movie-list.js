import MovieListItem from '../movie-list-item/movie-list-item'
import './movie-list.css'

const MovieList = ({data, onDelete, onToggleProp}) => {
	return ( 
		<ul className='movie-list'>
			{data.map( (item, index)=> (
				<MovieListItem 
				name={item.name}
				viewers={item.viewers} 
				favourite={item.favourite}   
				like={item.like}   
				key={index}
				onDelete={() => onDelete(index)}
				onToggleProp={(e) => onToggleProp(index, e.currentTarget.getAttribute('data--toggle'))}
				/>
				))}
		</ul>
	)
}

export default MovieList
