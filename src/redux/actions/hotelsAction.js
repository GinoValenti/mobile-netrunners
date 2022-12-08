import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from '../../api/url'
const getHotels = createAsyncThunk("getHotels", async ({string,valueSearch}) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/${string}?name=${valueSearch}`
      );
  
      console.log(res.data.allhotels);
      return { string, hotels: res.data.allhotels ,valueSearch:valueSearch};
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getOnlyHotels = createAsyncThunk("getOnlyHotels", async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/hotels`
      );
  
      console.log(res.data.allhotels);
      return { hotels: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });


  const newHotel = createAsyncThunk("newHotel", async ({data,token}) =>{
    
let url = `${BASE_URL}/hotels`
let headers = {headers: {'Authorization':` Bearer ${token}`}}
try{
  let res = await axios.post(url,data,headers)
    console.log(res.data);
  if(res.data.id){

    return {
      responseId: res.data.id,
      success: true,
       response:data
    }
  }else{
    return {
      success: false, 
      response:res.data.message
    }
  }
}catch(error){
  console.log(error);
  return {
    success: false, response:"error"
  }
}
  })
  const getHotelsByUserId = createAsyncThunk("getHotelsByUserId", async ({userId}) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/hotels?userId=${userId}`
        );
        
        console.log(res.data.allhotels);
        return { userId:userId, hotels: res.data.allhotels};
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    });

    const deleteHotel = createAsyncThunk("deleteHotel", async ({id,token}) => {
      let headers = {headers: {'Authorization':` Bearer ${token}`}}
      let url = `${BASE_URL}/hotels/${id}`
      try {
        const res = await axios.delete(url,headers);
          
          console.log(res.data.allhotels);
          return { hotels: res.data.allhotels };
        } catch (error) {
          console.log(error);
          return {
            payload: "Error",
          };
        }
      });

      const editHotel = createAsyncThunk("editHotel", async  ({idEdit,data,token})=>{
        let headers = {headers: {'Authorization':` Bearer ${token}`}}
        let url = `${BASE_URL}/hotels/${idEdit}`
        try {
          let res = await axios.patch(url,data,headers)
          if(res.data.id)  {
          return {
            responseId: res.data.id,
            success: true,
             response:data
          }
        }else{
          return {
            success: false, 
            response:res.data.message
          }
        }
      }catch(error){
        console.log(error);
        return {
          success: false, response:"error"
        }
      }
        })
    const hotelsAction = {
      getHotels
      ,newHotel,
      getHotelsByUserId,
      deleteHotel,
      editHotel,
      getOnlyHotels
    };
    
  export default hotelsAction