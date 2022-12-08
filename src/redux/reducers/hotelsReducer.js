import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsAction"; 

//desestructuro los createAsyncThunk de la accion HotelsAction
const {getHotels, newHotel, getHotelsByUserId,deleteHotel,editHotel,getOnlyHotels}= hotelsAction

//defino el initial state que va a tomar el reductor
//hotels un array vacio que posteriormente se va a cargar con el payload de la accion getHotels
const initialState={
    hotels: [],    
  valueSearch:'',
    userId:"",
    hotelsUser:[],
}

const hotelsReducer = createReducer(initialState,
    (builder)=>{
        builder
       //los reductores asyncronos reciben tres tipo de accion
       //fulfilled, promise y rejected. se pudo haber completado, no se pudo haber concretado o fue rejected
        .addCase(getHotels.fulfilled,(state,action)=>{
            console.log(action)
            return {
                ...state,
                valueSearch:action.payload.valueSearch,
                hotels: action.payload.hotels
            }
            
        })
        .addCase(getOnlyHotels.fulfilled,(state,action)=>{
            return{
                ...state,
                hotels:action.payload.hotels
            }
        })
        //el primer parametro es la accion en su estado fulfilled(completada) y el segundo una funcion flecha que depende del state actual
        //y de la accion
        .addCase(newHotel.fulfilled,(state,action) =>{
            if(action.payload.success){
        
                state.hotels.push(action.payload.response)
            }
        })
        .addCase(getHotelsByUserId.fulfilled,(state,action)=>{
            return {
                ...state,
                hotelsUser: action.payload.hotels
            }
        })
        .addCase(deleteHotel.fulfilled,(state,action)=>{
            return{
                ...state,
                id:action.payload.id
            }
        })
        .addCase(editHotel.fulfilled,(state,action)=>{
            return{
                ...state,
                id:action.payload.id
            }
        })


})


export default hotelsReducer
