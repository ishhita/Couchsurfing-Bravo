import * as todoActions from "./actionType"
import axios from "axios"
const getHostsRequest=()=>{
    return (
        {
            type:todoActions.GET_HOSTS_REQUEST
        }
    )
}
const getHostsSuccess=(payload)=>
{
    return (
        {
            type:todoActions.GET_HOSTS_SUCCESS,
            payload
        }
    )
}
const getHostsFailure=()=>{
    return (
        {
            type:todoActions.GET_HOSTS_FAILURE
        }
    )
}
const getHosts=(params={})=>(dispatch)=>{
    dispatch(getHostsRequest())
    return axios.get("https://hidden-springs-42645.herokuapp.com/hosts",{
        params
    })
    .then((res)=>dispatch(getHostsSuccess(res.data)))
    .catch(err=>dispatch(getHostsFailure()))
}
export default getHosts