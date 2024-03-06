import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const APIurl = process.env.API_URL;
	//1.useState first always
	const [characters, setCharacters] = useState([])

	//2.declaration of fetchCharacters function
	async function fetchCharacters(){
		const response = await fetch(`${APIurl}Characters`)//no funciona cuando no se le pone la / a la variable de entorno
		const data = await response.json()
		setCharacters(data)
	}

	//3.use Effect where we will call fetchCharacters
	useEffect(() => {
		fetchCharacters()
	},[])

	return (
		<div className="d-flex flex-wrap gap-2 mt-5">
			{/* WHEN COMBINING FETCH WITH MAP, always make sure the state exists before trying to map  */}
			{characters ? characters.map((personaje, ind) => <Character key={ind} item={personaje}/>) : <h1>fetching characters..</h1>} 
		</div>
	)
}

//declaracion del componente de character individual para usar en el map 
const Character = ({item}) => {
	return(
		<div className="card" style={{width: "18rem"}}>
			<img src={item.imageUrl} className="card-img-top" style={{maxHeight: "200px"}} />
			<div className="card-body">
				<h3 className="card-title">{item.fullName}</h3>
				<p className="card-title">{item.family} - {item.title}</p>
				<Link to={`/character/${item.id}`} className="btn btn-primary">CHARACTER DETAILS</Link>
			</div>
		</div>
	)
}
	
