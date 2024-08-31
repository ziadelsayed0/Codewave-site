import {Navigete} from "react-router-dom"
import api from "../api"
import {jwtDecode} from "jwt-decode"
import { ACCESS_TOKEN,REFESH_TOKEN } from "../constants"
import { useState, useEffect } from "react"

function ProtectedRoute({childern}){
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        auth().catch(() => {setIsAuthorized(flase)})
    },[]);

    const refreshToken = async ()=>{
        const refreshToken = localStorage.getItem(REFESH_TOKEN);

        try{
            const res = await api.post("api/token/refresh/",{
                refresh:refreshToken
            });

            if(res.status === 200){
                localStorage.setItem(ACCESS_TOKEN,res.data.access)
                setIsAuthorized(true)
            }
            else{
                setIsAuthorized(false)
            }
        }
        catch(error){
            console.log(error)
            setIsAuthorized(flase)
        }
    }

    const auth= async()=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            setIsAuthorized(flase)
            return
        }
        const decoded = jwtDecode(token)
        const expiration = decoded.exp
        const now = Date.now()/1000 // to get the date in seconds 

        if(expiration < now){
            await refreshToken()
        }
        else{
            setIsAuthorized(true)
        }
    }

    if(isAuthorized === null){
        return <div>Lodding...</div>
    }

    return isAuthorized ? childern : <Navigete to="/login"/>
}

export default ProtectedRoute