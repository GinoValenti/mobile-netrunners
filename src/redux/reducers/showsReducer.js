import { createReducer } from "@reduxjs/toolkit";
import showsAction from "../actions/showsAction"; 

//desestructuro los createAsyncThunk de la accion HotelsAction
const { getShowsByUserId,deleteShow,editShow,newShow}= showsAction

//defino el initial state que va a tomar el reductor
//hotels un array vacio que posteriormente se va a cargar con el payload de la accion getHotels
const initialState={
 shows:[],
    userId:"",
    showsUser:[],
}

const showsReducer = createReducer(initialState,
    (builder)=>{
        builder
       //los reductores asyncronos reciben tres tipo de accion
       //fulfilled, promise y rejected. se pudo haber completado, no se pudo haber concretado o fue rejected
      
        //el primer parametro es la accion en su estado fulfilled(completada) y el segundo una funcion flecha que depende del state actual
        //y de la accion
      
        .addCase(getShowsByUserId.fulfilled,(state,action)=>{
            return {
                ...state,
                showsUser: action.payload.shows
            }
        })
        .addCase(deleteShow.fulfilled,(state,action)=>{
            return{
                ...state,
                id:action.payload.id
            }
        })
        .addCase(editShow.fulfilled,(state,action)=>{
            return{
                ...state,
                id:action.payload.id
            }
        })
        .addCase(newShow.fulfilled,(state,action) =>{
            if(action.payload.success){//si la accion es success que se pushee el nuevo hotel al array de hotels vacio 
                state.shows.push(action.payload.response)
            }
        })


})


export default showsReducer