
const connect = true //เช็คเน็ต
const url1 = "khem.dey/file1.json"
const url2 = "khem.dey/file2.json"
const url3 = "khem.dey/file3.json"
const url4 = "khem.dey/file4.json"
const url5 = "khem.dey/file5.json"
const url6 = "khem.dey/file6.json"

function downloading(url) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (connect) {
                resolve(`กำลังดาวน์โหลดไฟล์จาก ${url} เรียบร้อย`)
            } else {
                reject(`เกิดข้อผิดพลาด`)
            }
        }, 1000)
    })
}
//promise Hell
downloading(url1).then(function(result){
    console.log(result)
    downloading(url2).then(function(result){
        console.log(result)
        downloading(url3).then(function(result){
            console.log(result)
        })
    })
})
//promise then
downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result){
    console.log(result)
    return downloading(url3)
}).then(function(result){
    console.log(result)
    return downloading(url4)
}).then(function(result){
    console.log(result)
    return downloading(url5)
}).then(function(result){
    console.log(result)
}).then(function(result){
    console.log(result)
})