// Get the clock element
const clockElement = document.getElementById('clock');

// Function to update the clock
function updateClock() {
    // Get the current time
    const now = new Date(); //this has to be inside to ever interval the fuction refreshes
    // the function will take shit fromt this

    // Format the time as HH:MM:SS
    //String(...): This converts the number obtained from getHours() into a string
    const hours = String(now.getHours()).padStart(2, '0');
    // padStart() method works with strings, not numbers.
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Update the clock text
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
