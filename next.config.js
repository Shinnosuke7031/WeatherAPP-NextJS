require('dotenv').config()
module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',

    }
    return config
  },
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  }
}
