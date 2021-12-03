import { createContext, useEffect, useState } from "react";
import { apiAlojamiento } from "./Api";

const AlojamientoContext = createContext();

const AlojamientoProvider = ({children})=>{

    const [alojamientos, setAlojamiento] = useState([]);

    useEffect(()=>{
        getAlojamiento();
    }, []);

    const handleCreate = async (objAlojamiento)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiAlojamiento, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objAlojamiento)
        });

        if(resp.status === 201){
            getAlojamiento();
        }
        return resp;
    }

    const getAlojamiento = async()=>{
        //Capturar el token
        let token = localStorage.getItem('token');
        //Realizar petición
        let resp = await fetch(apiAlojamiento, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });

        if(resp.status === 200){
            let json = await resp.json();
            setAlojamiento(json);
        }

        return resp;
    }

    const updateAlojamiento = async (objAlojamiento)=>{
        //Capturar el token
        let token = localStorage.getItem('token');
        //Realizar petición
        let resp = await fetch(apiAlojamiento, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(objAlojamiento)
        });

        if(resp.status === 200){
            getAlojamiento();
        }

        return resp.status;
    }

    const handleDelete = async(id)=>{
        let token = localStorage.getItem('token');
        let resp = await fetch(apiAlojamiento, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({id: id})
        });
    
        if(resp.status === 200){
            getAlojamiento();
        }
    
        return resp.status;
    }
    

    const data = {handleCreate, getAlojamiento, alojamientos, updateAlojamiento}

    return <AlojamientoContext.Provider value={data}>{children}</AlojamientoContext.Provider>
}


export {AlojamientoProvider};
export default AlojamientoContext;
