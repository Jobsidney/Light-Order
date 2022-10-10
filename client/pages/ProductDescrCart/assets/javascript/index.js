
const minus=document.querySelector('#plus')
minus.addEventListener('click',AddItem)
let sum=0;
let min=0;

function AddItem(sign){

    const num=document.querySelector('#cartAdd')
        num.innerHTML=sum++    
}