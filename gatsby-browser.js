exports.onRouteUpdate = ({ location, prevLocation }) => {
  //console.log('current route: ', location.pathname)
  console.log("prev route: ", prevLocation ? prevLocation.pathname : "none")
}
