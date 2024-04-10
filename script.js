
// Array of different color schemes
const colorSchemes = [
    'linear-gradient(#c1a3ff, #ffc3f8, #ff8f99)', // Color scheme 1
    'linear-gradient(#63a298, #00a5e3, #a53fe4) ', // Color scheme 2
    'linear-gradient( #b684de, #bb81dd, #c07ddb, #c679d9, #cb75d7, #b57fe6, #9a89f1, #7a92f8, #00a4f7)',  // Color scheme 3
 
];

// Choose a random index based on Math.random
const randomIndex = Math.floor(Math.random() * colorSchemes.length);

// Output the selected background scheme number to the console
console.log("Selected background scheme:", randomIndex + 1);

// Apply the randomly chosen color scheme to the body background
document.body.style.background = `${colorSchemes[randomIndex]} no-repeat fixed`;

// END OF BACKGROUND STUFF


