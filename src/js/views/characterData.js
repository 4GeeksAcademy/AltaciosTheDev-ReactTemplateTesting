import React, {useState, useEffect} from "react"
//1)forma de navegar de lado a lado y cambiar ruta
import { Link } from "react-router-dom";
//2)otra forma de navegar de lado a lado y cambiar ruta
import { useNavigate } from "react-router";

//allows to store the params and to use as variables to be passed unto views that need to render based on the param and to use it.
import { useParams } from "react-router" 

export const CharacterData = () => {

    //1. useState of character info
    const [person, setPerson] = useState()

    //useParams permite extraer el parametro de la ruta y se destructura
    const {id} = useParams()

    //useNavigate hook allows to include in a function and put more logic into it OR include in places where ONLY logic exists. 
    const navigate = useNavigate()

    //2. function to fetch data for character
    async function fetchCharacter(){
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        //this is b/c the desired fetch does not exist so we can navigate to another page with an error message.

        //This code will run whenever the status code received is NOT in the 200-299 range, this indicates request NOT successful according to HTTP standards. 
        if(!response.ok){
            //Navigate logic will immmediately move to a URL not registered, which will render 404 not found on the page. 
            navigate('/sdass')
        }
        //In the case of successful response, setState. 
        const data = await response.json()
        setPerson(data)
    }

    //3. useEffect to render info onmounting of component 
    useEffect(() => {
        fetchCharacter()
        //dependency array will be id, and this will make sure the UI is continously rendered based on that. 
    },[id])

    return (
        <>
            {person && <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>{person.fullName}</h1>
                    <img src={person.imageUrl} className="card-img-top" style={{maxHeight: "200px", maxWidth: "250px"}} onClick={() => navigate(`/character/${parseInt(id)+1}`)}/>
                    <div>
                        <Link to={`/character/${parseInt(id)-1}`}><button className="btn btn-warning mt-2 me-2">PREVIOUS</button></Link>
                        <Link to={`/character/${parseInt(id)+1}`}><button className="btn btn-primary mt-2">NEXT</button></Link>    
                    </div>

                </div>
            }
            
        </>
    )
}