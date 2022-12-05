import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

// En la UI se dispara la accion, la accion se carga con lo necesario, esa misma accion la recibe
// el reducer, este toma el state y carga el payload para ir actualizando el state

const getCitiesFilter = createAsyncThunk("getCitiesFilter", async ({ cities, search ,check }) => {
  // getcitiesfilter recibe primero el nombre de la accion , el segundo argumento es una funcion callback asyncronico
  try {
    console.log(check);
    const res = await axios.get(
      `${BASE_URL}/${cities}?title=${search}${check.join('')}`
    );

    return { value: search, cities: res.data.allcities };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const getCities = createAsyncThunk("getCities", async (value) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/${value}`
      );
  
      return { value, cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getCitiesUser = createAsyncThunk("getCitiesUser", async ({userId}) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/cities?userId=${userId}`
      );
  
      console.log(res.data.allcities);
      return { cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({cityId, token})=> {
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    try {
      const res = await axios.delete(
        `${BASE_URL}/cities/citiesDelete/${cityId}`, headers
        )
        console.log(res.data.city)
      return { cities: res.data.city }
      
    } catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
    
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go, token})=> {
    let headers = { headers: { Authorization: `Bearer ${token}`}}
    let url = `${BASE_URL}/cities/citiesUpdate/${go}`
    
    try {
      let res = await axios.put(url,data, headers)
  
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



const newCity = createAsyncThunk('newCity', async ({data, token}) => {
  let headers = { headers: { Authorization: `Bearer ${token}`}}
  let url = `${BASE_URL}/cities`
  try {
    let res = await axios.post(url,data,headers)

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
      response: 'ocurrio un error'
    }
  }
})



const citiesActions = {
  getCitiesFilter,
  getCities,
  newCity,
  getCitiesUser,
  getAndDestroy,
  getAndEdit
};

export default citiesActions;