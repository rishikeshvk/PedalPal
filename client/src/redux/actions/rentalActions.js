import axios from "axios";
import { message } from "antd";
export const rentBicycle = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
     await axios.post("/api/rentals/bookbicycle" , reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your bicycle booked successfully");
    setTimeout(() => {
      window.location.href='/userrentals'
    }, 500);

    
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const getAllRentals=()=>async dispatch=>{

  dispatch({type: 'LOADING' , payload:true})

  try {
      const response = await axios.get('/api/rentals/getallrentals')
      dispatch({type: 'GET_ALL_RENTALS', payload:response.data})
      dispatch({type: 'LOADING' , payload:false})
  } catch (error) {
      console.log(error)
      dispatch({type: 'LOADING' , payload:false})
  }

}