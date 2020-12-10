const MobileList = require('../../models/mobilelist')
function homeController(){
    return {
        async index(req,res){
            const mobiles = await MobileList.find();
            res.render('home',{mobiles:mobiles});
        }
    }
}
module.exports = homeController;