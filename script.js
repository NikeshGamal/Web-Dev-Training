const contactBtn=document.getElementById("contact");
const serviceContainer= document.getElementById("serviceContainer");

const changeColor= ()=>{
      serviceContainer.style.backgroundColor='blue';
}

contactBtn.addEventListener('click',changeColor);