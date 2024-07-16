const async = require("hbs/lib/async")


exports.home = async(require, response) => {
    // response.send('HOLA MUNDO NUEVO')
    return response.status(200).json({
        msg:"INICIO EXITOSO"
    })
    //response.render("home")
}