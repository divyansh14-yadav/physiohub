
import api from "../axios/axios";
const api_url = "https://physiohub.onrender.com/api/v1";



export async function LoginRequest (url,request) {
    try {
        const res = await api(`${api_url}${url}`, request)
        return res
    } catch (error) {
        throw error

    }
}

export async function ApiPutRequest(url, request){
    try {
        const res = await api.put(`${api_url}${url}`, request)
        return res
    } catch (error) {
        throw error

    }
}
export async function ApiPostRequest(url, request){
    try {
        const res = await api.post(`${api_url}${url}`, request)
        return res
    } catch (error) {
      throw error
    }
}
export async function ApiDeleteRequest(url){
    try {
        const res = await api.delete(`${api_url}${url}`)
        return res
    } catch (error) {
        throw error
    }
}
export async function ApiFetchRequest(url){
    try {
        const res = await api.get(`${api_url}${url}`)
        return res
    } catch (error) {
        throw error
    }
}