import React, {useState, useEffect} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	//useState first always
	const [characters, setCharacters] = useState([])

	//declaration of fetchCharacters function
	async function fetchCharacters(){
		const response = await fetch("https://thronesapi.com/api/v2/Characters")
		const data = await response.json()
		setCharacters(data)
	}

	//use Effect where we will call fetchCharacters
	useEffect(() => {
		fetchCharacters()
	},[])

	return (
		<div className="d-flex flex-wrap gap-2 mt-5">
			{/* will make sure characters exists first to map over and avoid bugs  */}
			{	
				characters && characters.map((personaje, ind) => {
					return (
						<Character key={ind} item={personaje}/>
					)
				})
			}
		</div>
	)
}

const Character = ({item}) => {
	return(
		<div className="card" style={{width: "18rem"}}>
			<img src={item.imageUrl} className="card-img-top" style={{maxHeight: "200px"}} />
			<div className="card-body">
				<h5 className="card-title">{item.fullName}</h5>
				<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<Link to={`/character/${item.id}`} className="btn btn-primary">CHARACTER DETAILS</Link>
			</div>
		</div>
	)

}
	
