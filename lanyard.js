AOS.init({
    once: true,
    duration: 1000
  });



  lanyard({
userId: "724325586679365643",
socket: true,
onPresenceUpdate: (data) => {
  console.log(data);

  var avatarid = data.discord_user.avatar;
  var pfp = document.getElementById("pfp");
  pfp.src = `https://cdn.discordapp.com/avatars/724325586679365643/${avatarid}.png?size=1024`;

  var username = data.discord_user.global_name;
  document.getElementById("user").innerHTML = username;

  var songname = (data && data.spotify && data.spotify.song) ? data.spotify.song : null;
  var artist = (data && data.spotify && data.spotify.artist) ? data.spotify.artist : null;

  var songElement = document.getElementById("songarea");

  if (songname === null) {
    console.log("Song is null");
    songElement.innerHTML = `<h2></h2>`;
  } else {
    console.log("Listening to:", songname, "by", artist);
    songElement.innerHTML = `<h2 class="shrinktext" class="prevent-select" data-aos="zoom-in-down">Listening to <span style="color: aquamarine;">${songname} by ${artist}</span></h2>`;
  }
  
  var songid = data.spotify.track_id;
  console.log(songid)

  AOS.init({
    once: true,
    duration: 1000
  });
}
});
