AOS.init({
  once: true,
  duration: 1000,
});
function getSongInfo(trackid) {
  return fetch(`https://api.slikc.me/api/spotify/song/${trackid}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }).then((data) => {
      return data
    })
}

lanyard({
  userId: "724325586679365643",
  socket: true,
  onPresenceUpdate: (data) => {
    console.log(data);


    



    var albumCoverUrl = data.spotify ? data.spotify.album_art_url : null;

    if (albumCoverUrl) {
      // Get the albumCoverImg element by its ID
      var albumCoverImg = document.getElementById("albumCoverImg");

      // Check if the albumCoverImg element exists
      if (albumCoverImg) {
        // If the element exists, update its src attribute with the new URL
        albumCoverImg.src = albumCoverUrl;
      } else {
        // If the element doesn't exist, create a new image element
        albumCoverImg = document.createElement("img");

        // Set the src attribute of the image element to the album cover URL
        albumCoverImg.src = albumCoverUrl;

        // Add any additional attributes or styles to the image element if needed
        // For example, you can set the width and height of the image:
        albumCoverImg.style.width = "300px";
        albumCoverImg.style.height = "300px";

        // Set the ID of the image element
        albumCoverImg.id = "albumCoverImg";

        // Append the image element to the albumCoverContainer
        var container = document.getElementById("albumCoverContainer");
        container.appendChild(albumCoverImg);
      }
    } else {
      // If albumCoverUrl is null, remove the album cover image
      var albumCoverImg = document.getElementById("albumCoverImg");
      if (albumCoverImg) {
        albumCoverImg.remove();
      }
      moveback();
    }


    var avatarid = data.discord_user.avatar;
    var pfp = document.getElementById("pfp");
    pfp.src = `https://cdn.discordapp.com/avatars/724325586679365643/${avatarid}.png?size=1024`;

    var username = data.discord_user.global_name;
    document.getElementById("user").innerHTML = username;

    var songname =
      data && data.spotify && data.spotify.song ? data.spotify.song : null;
    var artist =
      data && data.spotify && data.spotify.artist ? data.spotify.artist : null;

    var songElement = document.getElementById("songarea");
    
    if (songname === null) {
      console.log("Song is null");
      songElement.innerHTML = `<h2></h2>`;
    } else {
      console.log("Listening to:", songname, "by", artist);
      songElement.innerHTML = `<h2 class="shrinktext" class="prevent-select" data-aos="zoom-in-down">Listening to <span style="color: aquamarine;">${songname} by ${artist}</span></h2>`;
    
      var songid = data.spotify.track_id;
      let songInfo;
      getSongInfo(songid).then(data => {
        // Once the promise is fulfilled, you can access the song info here
        songInfo = data;
        console.log(songInfo)
        console.log(songInfo.info.tempo)
        var tempo = songInfo.info.tempo
     
        var beatDuration = (60 / tempo * 1000) * 4; // Multiply by 4 for every four beats

        function onBeat() {
            console.log("Function executed on beat");
            
        }
        setInterval(onBeat, beatDuration);


        
        var twoBeatsDuration = beatDuration * 2;
        console.log(twoBeatsDuration)


// Function to round BPM to the nearest whole number
function roundBPM(bpm) {
  return Math.round(bpm);
}

// Example BPM
var bpm = 97.915;

// Round BPM to the nearest whole number
var roundedBPM = roundBPM(bpm);

console.log("Original BPM: " + bpm);
console.log("Rounded BPM: " + roundedBPM);
document.getElementById("roundedBPM").innerHTML = pageBPM; 


        // Now you can do whatever you want with the song info, like displaying it on a webpage or using it in your code
      })       




      document.getElementById("song").onclick = function() {
        window.open(`https://open.spotify.com/track/${songid}`)
        console.log('bazinga!');
    };


    }



    AOS.init({
      once: true,
      duration: 1000,
    });
  },
});





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
