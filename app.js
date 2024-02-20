const button=document.getElementById("sub");
const input=document.getElementById("input");
const span =document.querySelector("span");
const form =document.querySelector("form");


form.addEventListener("submit",()=>{
   if(/^[A-z]+[0-9]*[.]?[A-z]+[0-9]*@[A-z]+[.][a-z]+$/.test(input.value)){
      span.style.display="none";
      input.classList.remove("invalid");
     localStorage.setItem("data",JSON.stringify(input.value))
      form.action="success.html";
     
   }else{
      e.preventDefault()
      input.classList.add("invalid");
      span.style.display="block";
   }
})

button.addEventListener("click",(e)=>{

 if(/^[A-z]+[0-9]*[.]?[A-z]+[0-9]*@[A-z]+[.][a-z]+$/.test(input.value)){
    span.style.display="none";
    input.classList.remove("invalid");
   localStorage.setItem("data",JSON.stringify(input.value))
    form.action="success.html";
   
 }else{
    e.preventDefault()
    input.classList.add("invalid");
    span.style.display="block";
 }
 
})

