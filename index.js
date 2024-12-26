

const btn=document.getElementById('genpass')
const newpass=document.getElementById('newpass')
const slider=document.getElementById('range')
const rangeVal=document.getElementById('rangeVal')

const uppercase=document.getElementById('caplet')
const lowerrcase=document.getElementById('small')
const Number=document.getElementById('number')
const Sym=document.getElementById('Symbol')
const copybtn=document.getElementById('copybtn')



rangeVal.innerText = slider.value

slider.addEventListener('input', (e) => {
    rangeVal.innerText = e.target.value
})


btn.addEventListener('click',()=>{

let capitalletter='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let smallletter='abcdefghijklmnopqrstuvwxyz'
let number='0123456789'
let Symbol='@#$%^&*:"?|+_-!'
let finalStr='';

if(uppercase.checked){
    finalStr+=capitalletter;
}
if(lowerrcase.checked){
    finalStr+=smallletter;
}
if(Number.checked){
    finalStr+=number;
}
if(Sym.checked){
    finalStr+=Symbol;
}



if(finalStr===''){
    alert('Please select at least one option')
}


let lastestpass=''

for (let i=0; i<slider.value;i++){
    let randNum=Math.floor(Math.random()* finalStr.length)
    
    lastestpass+=finalStr.charAt(randNum)
}

    newpass.innerText=`${lastestpass}`
})
copybtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(newpass.innerText)

})