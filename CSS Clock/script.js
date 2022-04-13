const hand = document.querySelectorAll(".hand")
const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".min-hand")
const secondHand = document.querySelector(".second-hand")


function setDate() {
    setInterval(() => {
    let current = new Date()
    let seconds = current.getSeconds()
    let minutes = current.getMinutes()
    let hours = current.getHours()

    let degrees_sec = ((seconds / 60) * 360) + 90;
    let degrees_min = ((minutes / 60) * 360) + 90;
    let degrees_hours = ((hours / 12) * 360) + 90;
    
    if (degrees_sec === 90 || degrees_sec === 444) {
        secondHand.style.transition = 'all 0s'; 
        console.log("hi");
    } else {
        secondHand.style.transition = 'all 0.05s';
    }
    
    secondHand.style.transform = `rotate(${degrees_sec}deg)`
    minuteHand.style.transform = `rotate(${degrees_min}deg)`
    hourHand.style.transform = `rotate(${degrees_hours}deg)`
    
    }, 1000)
}

setDate()