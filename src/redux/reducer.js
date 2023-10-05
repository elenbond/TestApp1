import { createSlice } from "@reduxjs/toolkit"
import { fetchImages } from "./actions"

const initialState = {
  images: [],
  loading: false,
  error: null,
}

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false
        state.images = [...state.images, ...action.payload]
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default imageSlice.reducer


// REDUX-THUNK
// import { combineReducers } from "redux"

// const initialState = {
//     images: [],
//     loading: false,
//     error: null,
// }

// const imageReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_IMAGES_SUCCESS":
//         return {
//             ...state,
//             images: action.payload,
//             loading: false,
//             error: null,
//         }
//     case "FETCH_IMAGES_FAILURE":
//         return {
//             ...state,
//             loading: false,
//             error: action.payload,
//         }
//     default:
//         return state
//     }
// }

// const rootReducer = combineReducers({
//     images: imageReducer,
// })

// export default rootReducer

