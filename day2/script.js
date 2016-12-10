/**
 * Created by preb on 09.12.16.
 */
let now = new Date();

/*let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = Math.abs(now.getHours() - 12);*/

// Small test
let seconds = 50;
let minutes = 59;
let hours = 11;

let secondsDegrees = (seconds/60)*360;
let minutesDegrees = (minutes/60)*360;
let hoursDegrees = (hours/12)*360;

document.getElementById("second-hand").style.transform = `rotate(${secondsDegrees}deg)`;
document.getElementById("minute-hand").style.transform = `rotate(${minutesDegrees}deg)`;
document.getElementById("hour-hand").style.transform = `rotate(${hoursDegrees}deg)`;

setInterval(function() {
    secondsDegrees += 6;
    document.getElementById("second-hand").style.transform = `rotate(${secondsDegrees}deg)`;

    if(secondsDegrees % 360 === 0) {
        minutesDegrees += 6;
        document.getElementById("minute-hand").style.transform = `rotate(${minutesDegrees}deg)`;
        if(minutesDegrees % 360 === 0) {
            hoursDegrees += 30;
            document.getElementById("hour-hand").style.transform = `rotate(${hoursDegrees}deg)`;
        }
    }
}, 1000);
