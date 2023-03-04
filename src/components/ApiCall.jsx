import React,{useState,useEffect} from "react";
import axios from 'axios';

const ApiCall = (props)=>{
    const [state,setState] = useState([])
    useEffect(()=>{
    console.log('its runing')
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => {setState(response.data.results)})
        .catch(error => console.log(error))
    },[]);
    return(
        <div>
            {state.map((state,index)=>{
                return(<div key={index}><p>{state.name}</p></div>)
            })}
        </div>
    );
    
}
export default ApiCall