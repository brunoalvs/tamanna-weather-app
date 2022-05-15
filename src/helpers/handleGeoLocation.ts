import { ILocation } from '../../types'

async function getCurrentUserPosition() {
  return new Promise<{
    coords: { latitude: number; longitude: number }
  }>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

type handleGeoLocation = () => ILocation
async function handleGeoLocation() {
  const { coords } = await getCurrentUserPosition()
  let url = `https://api.opencagedata.com/geocode/v1/json?q=${coords.latitude},${coords.longitude}&key=${process.env.OPENCAGEDATA_APIKEY}`

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      let location: ILocation = {
        city: data.results[0].components.city,
        country: data.results[0].components.country,
        coord: {
          lat: coords.latitude,
          lon: coords.longitude,
        },
      }
      return location
    })
    .catch(error => console.log(error.message))
}

export default handleGeoLocation
