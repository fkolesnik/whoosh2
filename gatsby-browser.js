import React from "react"
import { Provider } from "./src/context/index"

export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>

/*exports.onRouteUpdate = ({ location, prevLocation }) => {
  //console.log('current route: ', location.pathname)
  console.log("prev route: ", prevLocation ? prevLocation.pathname : "none")
}*/
