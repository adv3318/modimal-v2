import path from "path"
import Handlebars from "handlebars"

export const helpers = {
  picture: (dir, name, options) => {
    // If only 2 arguments are passed (name and options), shift them
    if (options === undefined) {
      options = name
      name = dir
      dir = ""
    }

    // Construct paths
    const basePath = path.join(dir, name).replace(/\\/g, "/")
    const imgPath = `/images/${basePath}`

    // Get attributes from options.hash (e.g. class="foo" alt="bar")
    const attributes = Object.keys(options.hash)
      .map((key) => {
        const value = Handlebars.Utils.escapeExpression(options.hash[key])
        return `${key}="${value}"`
      })
      .join(" ")

    const html = `
      <picture>
        <source srcset="${imgPath}.avif" type="image/avif">
        <source srcset="${imgPath}.webp" type="image/webp">
        <img src="${imgPath}.jpg" ${attributes}>
      </picture>
    `

    return new Handlebars.SafeString(html)
  },
  concat: (...args) => {
    args.pop() // Remove options object
    return args.join("")
  },
}
