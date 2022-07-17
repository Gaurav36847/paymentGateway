// donateBtn = document.getElementById("donBtn")
// donateBtn.addEventListener('click', ()=>{
//     window.open('https://rzp.io/l/6IukRCEo')
// })

// donateBtn1 = document.getElementById("donBtn1")
// donateBtn1.addEventListener('click', ()=>{
//     window.open('https://rzp.io/l/6IukRCEo')
// })

// console.log(donateBtn)

donate = document.getElementsByClassName('donate_btn')
for (const buttons of donate) {
   buttons.addEventListener('click',()=>{
    window.open('https://rzp.io/l/hkSnU7IggP')
   })
//    console.log(buttons)
}


let abc = document.getElementById('rmv')

let Body = document.body;
if(Body.clientWidth= '450px'){
   abc.remove = "mx-3"
}