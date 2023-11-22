// Blocking
const fs=require('fs')

//อ่านไฟล์ input.txt
fs.readFile("myfile/input.txt",'utf-8',(err,data)=>{
    if (err) return console.log("เกิดข้อผิดพลาด" , err)

const outpuTtxt = `hello node.js\n${data}\nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
fs.writeFile("myfile/output.txt",outpuTtxt,err=>{
    if (err) return console.log("เกิดข้อผิดพลาด" , err)
    console.log("เขียนไฟล์เรียบร้อย")

})
})


