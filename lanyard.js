AOS.init({
  once: true,
  duration: 1000,
});

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


