const now = new Date()
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const dayOfWeek = daysOfWeek[now.getDay()]
const hours = now.getHours()
const minutes = now.getMinutes()
let PmNoon = null

if (hours > 12){
    PmNoon = 'PM'
}else{
    PmNoon = 'AM'
}

let day = document.getElementById('day')
day.innerHTML = `Its ${dayOfWeek} Today!`
let time = document.getElementById("time")
time.innerHTML = `The time is ${hours}:${minutes} ${PmNoon}`
console.log(time)