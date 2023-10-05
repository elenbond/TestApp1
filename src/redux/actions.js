import { createAsyncThunk } from "@reduxjs/toolkit"
import { getImages } from "../api/api"

export const fetchImages = createAsyncThunk("images/fetchImages", async (page) => {
  try {
    const response = await getImages({ page })
    return response.data
  } catch (error) {
    throw error
  }
})


// REDUX-THUNK
// import { getImages } from "../api/api"

// // Action for getting images
// export const fetchImages = (page) => {
//     return async (dispatch) => {
//         try {
//             const response = await getImages({ page })
//             const images = response.data

//             dispatch({
//                 type: "FETCH_IMAGES_SUCCESS",
//                 payload: images,
//             })
//         } catch (error) {
//             console.error("Error fetching images:", error)
//             dispatch({
//                 type: "FETCH_IMAGES_FAILURE",
//                 payload: error.message,
//             })
//         }
//     }
// }

