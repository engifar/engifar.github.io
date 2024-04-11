
// Array of different color schemes
const colorSchemes = [
    'linear-gradient(#c1a3ff, #ffc3f8, #ff8f99)', // Color scheme 1
    'linear-gradient(#c1a3ff, #ffc3f8, #ff8f99)', // Color scheme 2
    'linear-gradient(#c1a3ff, #ffc3f8, #ff8f99)',  // Color scheme 3
 
];

// Choose a random index based on Math.random
const randomIndex = Math.floor(Math.random() * colorSchemes.length);

// Output the selected background scheme number to the console
console.log("Selected background scheme:", randomIndex + 1);

// Apply the randomly chosen color scheme to the body background
document.body.style.background = `${colorSchemes[randomIndex]} no-repeat fixed`;

// END OF BACKGROUND STUFF




// Function to update the equalizer bars with varying speeds
function updateEqualizerBars() {
    var bars = document.querySelectorAll('.bar');
    bars.forEach(function(bar) {
        // Generate a random number between 0 and 1 to represent intensity
        var intensity = Math.random();
        
        // Generate a random number between 1 and 3 to represent speed variation
        var speedVariation = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
        
        // Convert intensity to height, adjusting for speed variation
        var height = 20 + intensity * 40 * speedVariation; // Maximum height capped at 60%
        
        // Set height of the bar
        bar.style.height = height + '%';
    });
}



// Function to update bars if either song text or song area is hovered
function updateBarsIfHovered() {
    var isHovered = false;
    var songText = document.getElementById('song'); // Assuming 'song' is the ID of your song text element
    var songArea = document.getElementById('songarea'); // Assuming 'songarea' is the ID of your song area element
    
    // Check if either song text or song area is being hovered
    if (songText.matches(':hover') || songArea.matches(':hover')) {
        isHovered = true;
    }
    

    // If hovered, update equalizer bars
    if (isHovered) {
        updateEqualizerBars();
    } else {
        // If not hovered, reset equalizer bars to the "down" state
        var bars = document.querySelectorAll('.bar');
        bars.forEach(function(bar) {
            bar.style.height = '0'; // Set height to 0 to reset bars
        });
    }
}



// Call the updateBarsIfHovered function every so often
setInterval(updateBarsIfHovered, 100);

// Function to initialize equalizer bars
function initializeEqualizerBars() {
    var bars = document.querySelectorAll('.bar');
    bars.forEach(function(bar) {
        bar.style.height = '0'; // Set initial height to zero
    });
}

// Call the initializeEqualizerBars function when the page is loaded
window.addEventListener('load', initializeEqualizerBars);


// Function to gradually increase the opacity of the equalizer bars to 1 after a delay
function graduallyIncreaseOpacity() {
    var equalizer1 = document.getElementById('equalizer');
    var equalizer2 = document.getElementById('equalizer2');
    
    setTimeout(function() {
        equalizer1.style.opacity = '0.3'; // Set opacity to 0.4 for equalizer 1 after a delay
        equalizer2.style.opacity = '0.3'; // Set opacity to 0.4 for equalizer 2 after a delay

    }, 1000); // Adjust the delay as needed (in milliseconds)
}

// Call the graduallyIncreaseOpacity function when the page is loaded
window.addEventListener('load', graduallyIncreaseOpacity);

