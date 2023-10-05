import axios from "axios"
import cred from "./apiKey"

export const getImages = async () =>  {
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${cred.ACCESS_KEY}&count=30`)
        
        return response

    } catch {
        console.log("error")
        throw error
    }
}