import { createSlice } from "@reduxjs/toolkit"
import { GUIDE_EMPTY } from "src/constants/constants"

const initialState = {
  topicPostID: GUIDE_EMPTY,
}

export const topicPostSlice = createSlice({
  name: "topicPost",
  initialState,
  reducers: {
    changeTopicPostID: (state, action) => {
      state.topicPostID = action.payload
    },
  },
})

export const { changeTopicPostID } = topicPostSlice.actions

export default topicPostSlice.reducer
