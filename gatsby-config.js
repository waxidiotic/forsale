require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Alex Bussey Sells Some Stuff`,
    siteUrl: `https://forsale.alexbussey.com`,
    description: `Alex is moving. Alex is not taking some stuff with him. You should buy that stuff.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
