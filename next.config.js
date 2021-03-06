/* @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    OPENWEATHERMAP_APIKEY: process.env.OPENWEATHERMAP_APIKEY,
    OPENCAGEDATA_APIKEY: process.env.OPENCAGEDATA_APIKEY,
  },
}
