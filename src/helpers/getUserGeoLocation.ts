// A function that use navigator geolocation api, to returns an array with latitude and longitude

async function getCurrentPosition() {
  return new Promise<{ coords: { latitude: number; longitude: number } }>(
    (resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    }
  )
}

async function getUserGeoLocation() {
  const { coords } = await getCurrentPosition()

  return [coords.latitude, coords.longitude]
}

export { getUserGeoLocation }
