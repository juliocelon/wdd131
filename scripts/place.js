
const temperatureC = 7;
const windSpeedKmH = 13;

function calculateWindChill(tempC, windKmH) {
    const windPower = Math.pow(windKmH, 0.16);
    const chill = 13.12 + (0.6215 * tempC) - (11.37 * windPower) + (0.3965 * tempC * windPower);
    return chill.toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.querySelector('#weather p:last-child');

    if (temperatureC <= 10 && windSpeedKmH > 4.8) {
        const windChill = calculateWindChill(temperatureC, windSpeedKmH);
        windChillElement.textContent = `Wind Chill: ${windChill}°C`;
    } else {
        windChillElement.textContent = 'Wind Chill: N/A';
    }
}

document.addEventListener('DOMContentLoaded', displayWindChill);
