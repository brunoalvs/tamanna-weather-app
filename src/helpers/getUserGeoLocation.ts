// A function that use navigator geolocation api, to returns an array with latitude and longitude

type getCurrentPosition = () => Promise<{
  coords: { latitude: number; longitude: number }
}>
async function getCurrentPosition() {
  return new Promise<{ coords: { latitude: number; longitude: number } }>(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  )
}

type getUserGeoLocation = () => Promise<[number, number]>
async function getUserGeoLocation() {
  const { coords } = await getCurrentPosition()

  return [coords.latitude, coords.longitude]
}

export { getUserGeoLocation, getCurrentPosition }
