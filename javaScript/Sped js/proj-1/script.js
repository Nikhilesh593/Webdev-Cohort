 function updateclock()
{
    const timeElement =document.getElementById("time")
 const dateElement =document.getElementById("date")
 console.log(timeElement);

 const now = new Date
 console.log(now);
 
 const hours = now.getHours()%12 || 12
 const mintues = now.getMinutes().toString().padStart(2,"0")
 const second = now.getSeconds().toString().padStart(2,"0")

 const ampm = now.getHours()>=12? "PM" :"AM";

    timeElement.textContent= `${hours}: ${mintues}:${second} :${ampm}`;
}

setInterval(updateclock,1000)
updateclock()


//  console.log(hours);         
//  console.log(second);         
//  console.log(mintues);         
 