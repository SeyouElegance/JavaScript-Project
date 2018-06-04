//DOM Déclarations
const DOMSeconds = document.querySelector('.second-hand');
const DOMMinutes = document.querySelector('.min-hand');
const DOMHours = document.querySelector('.hour-hand');





function setDate(){
   const now = new Date();

   const seconds = now.getSeconds();
   const secondsDeg = ((seconds / 60) * 360) + 90;
   DOMSeconds.style.transform = `rotate(${secondsDeg}deg)`;

   const minutes = now.getMinutes();
   const minutesDeg = ((minutes / 60) * 360) + 90;
   DOMMinutes.style.transform = `rotate(${minutesDeg}deg)`;

   const hours = now.getHours();
   const hoursDeg = ((hours / 12) * 360) + 90;
   DOMHours.style.transform = `rotate(${hoursDeg}deg)`;

   console.log(hours)
   console.log(minutes)



  
   


}



  



setInterval(setDate, 1000);