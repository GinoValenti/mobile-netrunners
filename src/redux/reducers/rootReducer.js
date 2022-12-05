import alertaReducer from "./alertaCityReducer";
import citiesReducer from "./citiesReducer"
import hotelsReducer from "./hotelsReducer";
import alertReducer from "./alertHotelReducer"
import showsReducer from "./showsReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";
import commentReducer from "./commentReducer";
import reactionReducer from "./reactionReducer";



const rootReducer={
    hotels : hotelsReducer,
    shows: showsReducer,
    alerta: alertReducer,
    alerta: alertaReducer,
    itinerary: itineraryReducer,
    usuario:userReducer,
    cities : citiesReducer,
    user: userReducer,
    comments:commentReducer,
    reaction: reactionReducer
}

export default rootReducer;