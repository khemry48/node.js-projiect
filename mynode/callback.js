
const url1 = "khem.dey/file1.json"
const url2 = "khem.dey/file2.json"
const url3 = "khem.dey/file3.json"
const url4 = "khem.dey/file4.json"
const url5 = "khem.dey/file5.json"
const url6 = "khem.dey/file6.json"
const url7 = "khem.dey/file7.json"

function downloading(url, callback) {
    console.log(`กำลังดาวน์โหลดไฟล์จาก ${url} `)
    setTimeout(() => {
        callback(url)
    }, 1000)
}

downloading(url1, function (result) {
    console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
    downloading(url2, function (result) {
        console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
        downloading(url3, function (result) {
            console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
            downloading(url4, function (result) {
                console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
                downloading(url5, function (result) {
                    console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
                    downloading(url6, function (result) {
                        console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)
                        downloading(url7, function (result) {
                            console.log(`ดาวน์โหลด ${result} เรียบร้อย! `)

                        })
                    })
                })
            })
        })

    })
})




