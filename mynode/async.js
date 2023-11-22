
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
//Asnc & Await
async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
    console.log(await downloading(url6))
}

start()














