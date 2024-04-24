function move() {
    anime({
        targets: '#glass, #pfp, #disc, #user, .linkscontainer',
        left: '27.5%',
        duration: 750,
        easing: 'easeInOutQuad',
    });
    anime({
        targets: '#glass2, #albumCoverContainer',
        left: '72.5%', // Move #glass2 to the center of the screen
        opacity: 1,
        duration: 750,
        easing: 'easeInOutQuad',
    });
}

function moveback() {
    anime({
        targets: '#glass, #pfp, #disc, #user, .linkscontainer',
        left: '50%', // Set the left position to 0 (original position)
        duration: 750,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '#glass2, #albumCoverContainer',
        left: '100%', // Move #glass2 offscreen to the right
        opacity: 0,
        duration: 750,
        easing: 'easeInOutQuad',
    });
    
}

document.addEventListener("DOMContentLoaded", function() {
    var songArea = document.getElementById("songarea");

    songArea.addEventListener("mouseenter", function() {
        
        move();
    });

    songArea.addEventListener("mouseleave", function() {
        
        moveback();
    });
});

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

document.addEventListener("DOMContentLoaded", function() {
    var songArea = document.getElementById("songarea");

    if (!isMobileDevice()) {
        songArea.addEventListener("mouseenter", function() {
            move();
        });

        songArea.addEventListener("mouseleave", function() {
            moveback();
        });
    }
});
