import './src/styles/global.css'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

export const onRouteUpdate = ({ location, prevLocation }) => {
    console.log("Новая локация:", location)
    console.log("Предыдущая локация:", prevLocation)

    // Твоя логика здесь: аналитика, скролл, защита и т.д.
}
