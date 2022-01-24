import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = () => {

    const [searchFor, setSearchFor] = useState([]);
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
            .then(res => {
                setSearchFor(Object.keys(res.data))
                console.log(Object.keys(res.data))
            }) // stores the keys from dev/api/ in the setSearchFor state variable
            .catch(err => console.log(err))
    },[])

    // variable for handling routes
    const processSubmit = (e) => {
        e.preventDefault()
        history.push(`/${selection}/${id}`)
    }

    return(
        <div>
            <form onSubmit={processSubmit} action="" className="form-control d-flex align-items-center justify-content-around">
                <div className="form-group d-flex align-items-center">
                    <label className="me-2">Search for:</label>
                    <select onChange={(e) => {setSelection(e.target.value)}} name="" id="" className="form-select">
                        {
                            searchFor.map((category, i) => {
                                return (
                                    <option value={category} key={i}>{category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="form-group d-flex align-items-center">
                    <label>ID:</label>
                    <input onChange={(e) => {setId(e.target.value)}} type="number" className="form-control" />
                </div>
                <input type="submit" value="Search" className="btn btn-primary" />
            </form>
        </div>
    );
}

export default Form;