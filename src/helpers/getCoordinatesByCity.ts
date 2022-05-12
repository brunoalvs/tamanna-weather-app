function getCoordinatesByCity(city) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${process.env.OPENCAGEDATA_APIKEY}`
  )
    .then(response => response.json())
    .then(data => {
      data.results[0].geometry
      data.results[0].geometry
      console.log(data.results[0].geometry)
      console.log(data.results[0])
    })
    .catch(error => console.log('error', error))
}

export { getCoordinatesByCity }
