
// const withPlugins = require('next-compose-plugins')
// const withOffline = require('next-offline')
// const withReactSvg = require('next-react-svg')
// const config = {
//     env: {
//         MY_ENV: process.env.MY_ENV
//     }
// }

// module.exports = withPlugins([
//     withOffline,
//     [withReactSvg, {
//         // config for reactSvgPlugin
//     }]
// ], config)

const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withNextEnv = nextEnv()
module.exports = withNextEnv()