//ให้บริการเกี่ยวกับการทำงานต่างๆในโปรเจค

function getCurrentTime(){
    return new Date()
}

function add(x,y){
    return x+y
}
function FormatNumber(Num){
    return Num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
}


//ส่งคำสั่งออกไปใช้
module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.FormatNumber = FormatNumber



