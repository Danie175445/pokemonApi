import React,{useState,useEffect} from "react";

const ApiCall = (props)=>{
    const [state,setState] = useState([])
    useEffect(()=>{
    console.log('its runing')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(response => response.json())
        .then(response => {
            console.log(response.results)
            setState(response.results)})
        .catch(error => console.log(error))
    },[]);
    return(
        <div>
            {state.length > 0 && state.map((state,index)=>{
                return(<div key={index}><p>{state.name}</p></div>)
            })}
        </div>
    );
}
export default ApiCall