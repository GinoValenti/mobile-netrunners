import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionAction";

const { newReaction, getReactionItinerary, getUserReactions} = reactionActions

const initialState={
    reactions: [],
    reactionProfile: []
}

const reactionReducer = createReducer(initialState,
    (builder)=> {
        builder
        .addCase(newReaction.fulfilled, (state,action)=> {
            if (action.payload.success) {
                    state.reactions.push(action.payload.response)
            }
        })
        .addCase(getReactionItinerary.fulfilled,(state,action)=>{
            console.log(action.payload.reactions)
                return { 
                    ...state,
                    reactions: action.payload.reactions
                } 
        })
        .addCase(getUserReactions.fulfilled,(state,action)=>{
            console.log(action.payload)
             return {
                 ...state,
                 reactionProfile: action.payload
             } 
         })
    })

export default reactionReducer
