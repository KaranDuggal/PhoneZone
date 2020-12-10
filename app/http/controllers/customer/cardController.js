function cardController(){
    return {
        async index(req,res){
            res.render('customer/card');
        },
        update(req,res){
            return res.json({data:'all okay'})
        }
    }
}
module.exports = cardController;