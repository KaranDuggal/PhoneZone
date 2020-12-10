const homeController = require('../app/http/controllers/homeController')
const cardController = require('../app/http/controllers/customer/cardController')

function initRoutes(app){
    app.get('/',homeController().index)
    app.get('/card',cardController().index)
    app.post('/update-card',cardController().update)
}

module.exports = initRoutes