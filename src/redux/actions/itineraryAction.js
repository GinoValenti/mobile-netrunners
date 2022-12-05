import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

  const getAllItineraries = createAsyncThunk('getAllItineraries', async()=> {
    try {
      const res = await axios.get(`${BASE_URL}/itinerary`)

      return {
        itineraries : res.data.itineraries
      }
    } catch(error) {
      console.log(error)
    }
  })

  const getItinerariesUser = createAsyncThunk("getItinerariesUser", async ({userId}) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/itinerary/itinerary?userId=${userId}`
      );
  
      console.log(res.data.itinerary);
      return { itinerary: res.data.itinerary };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  
  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({itineraryId, token})=> {
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    try {
      const res = await axios.delete(
        `${BASE_URL}/itinerary/itineraryDelete/${itineraryId}`, headers
      )
      return { itinerary: res.data.itinerary }
    } catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

 
  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go, token})=> {
  
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    
    let url = `${BASE_URL}/itinerary/itineraryUpdate/${go}`
    
    try {
      let res = await axios.put(url, data, headers)
  
      if (res.data.id){
        console.log(res.data.id)
        return {
          success: true,
          response: data,
          responseid: res.data.id
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      }
    } catch(error) {
      return {
        success: false,
        response: 'lptm un error'
      }
    }
  })

  const newItinerary = createAsyncThunk('newItinerary', async ({data, token}) => {
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    let url = `${BASE_URL}/itinerary`
    try {
      let res = await axios.post(url,data,headers)

      if (res.data.id){
        return {
          success: true,
          response: data,
          responseid: res.data.id
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      }
    } catch(error){
      return {
        success: false,
        response: 'Debes llenar todos los campos'
      }
    }
  })






const toDoActions = {
  getAndDestroy,
  getItinerariesUser,
  getAndEdit,
  newItinerary,
  getAllItineraries
};

export default toDoActions;