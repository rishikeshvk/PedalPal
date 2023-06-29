import { message } from 'antd';
import axios from 'axios';

export const getAllBicycles=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/bicycles/getallbicycles')
        dispatch({type: 'GET_ALL_BICYCLES', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}

export const addBicycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/bicycles/addbicycle' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('New bicycle added successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const editBicycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/bicycles/editbicycle' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('bicycle details updated successfully')
         setTimeout(() => {
            window.location.href='/admin'
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
      

}

export const deleteBicycle=(reqObj)=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
         await axios.post('/api/bicycles/deletebicycle' , reqObj)
       
         dispatch({type: 'LOADING' , payload:false})
         message.success('bicycle deleted successfully')
         setTimeout(() => {
            window.location.reload()
         }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
}