import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Results = () => {

    const { type, id } = useParams();
    const [details, setDetails] = useState({})

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then(res => {
                setDetails(res.data)
                console.log(res);
            })
            .catch(err => console.log(err))
    },[type, id])

    return(
        <div>
            {
                type === "people"?
                <>
                <h1><strong>{details.name}</strong></h1>
                <p>Height: {details.height} cm</p>
                <p>Mass: {details.mass} kg</p>
                <p>Hair Color: {details.hair_color}</p>
                <p>Eye Color: {details.eye_color}</p>
                </>: type === "planets"?
                <>
                <h1><strong>{details.name}</strong></h1>
                <p>Climate: {details.climate}</p>
                <p>Gravity: {details.gravity}</p>
                <p>Population: {details.population}</p>
                <p>Diameter: {details.diameter} km</p>
                </>: type === "films"?
                <>
                <h1><strong>{details.title}</strong></h1>
                <p>Director: {details.director}</p>
                <p>Producer: {details.producer}</p>
                <p>Episode: {details.episode_id}</p>
                <p>Release Date: {details.release_date}</p>
                </>: type === "species"?
                <>
                <h1><strong>{details.name}</strong></h1>
                <p>Classification: {details.classification}</p>
                <p>Designation: {details.designation}</p>
                <p>Average Lifespan: {details.average_lifespan} year(s)</p>
                <p>Homeworld: {details.homeworld} km</p>
                </>:
                <>
                <h1>These aren't the droids you're looking for.</h1>
                <img src="https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=960" alt="obi-wan kenobi" />
                </>
            }
        </div>
    )
}

export default Results;