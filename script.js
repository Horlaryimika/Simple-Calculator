let display = document.getElementById("result")

//method 1...long route!
// document.getElementById("btn1").addEventListener("click", () => {
//     display.innerHTML += 1
// })
// document.getElementById("btn2").addEventListener("click", () => {
//     display.innerHTML += 2
// })
// document.getElementById("btn3").addEventListener("click", () => {
//     display.innerHTML += 3
// })
// document.getElementById("btn4").addEventListener("click", () => {
//     display.innerHTML += 4
// })
// document.getElementById("btn5").addEventListener("click", () => {
//     display.innerHTML += 5
// })
// document.getElementById("btn6").addEventListener("click", () => {
//     display.innerHTML += 6
// })
// document.getElementById("btn7").addEventListener("click", () => {
//     display.innerHTML += 7
// })
// document.getElementById("btn8").addEventListener("click", () => {
//     display.innerHTML += 8
// })
// document.getElementById("btn9").addEventListener("click", () => {
//     display.innerHTML += 9
// })
// document.getElementById("btn0").addEventListener("click", () => {
//     display.innerHTML += 0
// })
// document.getElementById("btn+").addEventListener("click", () => {
//     display.innerHTML += "+"
// })
// document.getElementById("btn-").addEventListener("click", () => {
//     display.innerHTML += "-"
// })
// document.getElementById("btn/").addEventListener("click", () => {
//     display.innerHTML += "/"
// })
// document.getElementById("btn*").addEventListener("click", () => {
//     display.innerHTML += "*"
// })
// document.getElementById("btn=").addEventListener("click", () => {
//     display.innerHTML = eval(display.innerHTML)
// })
// document.getElementById("btnCE").addEventListener("click", () => {
//     display.innerHTML = ""
// })

//Method 2... short route!
let addToScreen = (value) => {
    display.innerHTML += value
}
document.getElementById("btn=").addEventListener("click", () => {
        display.innerHTML = eval(display.innerHTML)
     })
document.getElementById("btnCE").addEventListener("click", () => {
             display.innerHTML = ""
         })
