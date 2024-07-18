function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('digital-clock').innerText = timeString;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('date').innerText = dateString;

    const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById('day').innerText = dayString;
  }

  setInterval(updateDigitalClock, 1000);
  updateDigitalClock();