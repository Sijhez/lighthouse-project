const async = require("hbs/lib/async")


exports.home = async(require, response) => {
    response.render("home")
}