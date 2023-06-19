const hourHand = document.querySelector('.hour');
const minsHand = document.querySelector('.min');
const secondHand = document.querySelector('.second');

setInterval(setDate, 1000);

function setDate() {
    const currentDate = new Date();
     
    const seconds = currentDate.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = currentDate.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = currentDate.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

