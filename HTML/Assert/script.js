function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();
 
    const hourDeg = (hour * 30) + (0.5 * minute);
    const minuteDeg = (minute * 6) + (0.1 * second);
    const secondDeg = second * 6;
 
    document.getElementById('hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.getElementById('second-hand').style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
 
    const digitalTime = `${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
    document.getElementById('digital-time').innerText = digitalTime;
 }
 
 setInterval(updateClock, 1000);
 updateClock(); // Initial call to avoid delay
 