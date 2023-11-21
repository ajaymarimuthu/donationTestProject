

import { configureStore } from "@reduxjs/toolkit"
import userDetailsReducer from "./userDetails"


// we are configuing the store here
const store = configureStore(

    {

        //this reducer will take different reducers from differnet slices
        reducer: {

            donationUser: userDetailsReducer,

        }
    }

)


export default store;