import { ILocation } from '../../types'

function getCityByCoordinates(latitude: number, longitude: number) {
  return fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${process.env.OPENCAGEDATA_APIKEY}`
  )
    .then(response => response.json())
    .then(data => {
      // data.results[0].components
      // console.log(data.results[0].components)
      let myRes: ILocation = {
        city: data.results[0].components.city,
        country: data.results[0].components.country,
        // county: data.results[0].components.county,
        coord: {
          lat: latitude,
          lon: longitude,
        },
      }

      return myRes
    })
    .catch(error => console.log(error.message))
}
const getCityByCoordinates2 = (latitude: number, longitude: number) => {}

export { getCityByCoordinates }
