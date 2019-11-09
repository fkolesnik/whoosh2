import React from "react"
import { Provider } from "react-redux"
import { store } from "./store"

export const wrapWithProvider = ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
