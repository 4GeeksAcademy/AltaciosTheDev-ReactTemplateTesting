import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

//allows to store the params and to use as variables to be passed unto views that need to render based on the param and to use it.
import { useParams } from "react-router" 

export const CharacterData = () => {

    //useState of character info
    const [person, setPerson] = useState()

    //useParams permite extraer el parametro de la ruta y se destructura
    const {id} = useParams()

    //useNavigate hook allows to include in a function and put more logic into it OR include in places where ONLY logic exists. 
    const navigate = useNavigate()

    async function fetchCharacter(){
        const response = await fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
        //this is b/c the desired fetch does not exist so we can navigate to another page with an error message.
        if(!response.ok){
            //good use of the navigate.
            navigate('/sdass')
        }
        const data = await response.json()
        setPerson(data)
    }

    
    //useEffect to render info
    useEffect(() => {
        fetchCharacter()
    },[id])

    return (
        <>
            {person && <div>
                    <h1>{person.fullName}</h1>
                    <img src={person.imageUrl} className="card-img-top" style={{maxHeight: "200px"}} onClick={() => navigate(`/character/${parseInt(id)-1}`)}/>
                    <Link to={`/character/${parseInt(id)+1}`}>NEXT CHARACTER</Link>
                </div>
            }
            
        </>
    )
}