const Axios = require('axios')

let addToCard = document.querySelectorAll('.add-to-card')

function updateCard(mobile){
    Axios.post('/update-card',mobile).then(function(res){
        console.log(res)
    })
}
addToCard.forEach((btn) => {
    btn.addEventListener('click',(e)=>{
        let mobile = JSON.parse(btn.dataset.mobile)
        // update card function call
        updateCard(mobile)
    })
})