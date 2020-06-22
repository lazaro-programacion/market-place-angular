/// MIddleware para dar autorizacion  solo al usuario rol ADMIN a realizar cambios

exports.isAdmin = function (req, res, next) {
    if(req.user.rol != 'admin'){
        return res.status(200).send({message: 'no tienes permisos'})
    }

    next()
    
}