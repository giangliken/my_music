document.addEventListener('DOMContentLoaded', function () {
     const audio = document.getElementById('audio');
     const title = document.getElementById('title');
     const artist = document.getElementById('artist');
     const cover = document.getElementById('cover');
     const playlistItems = document.querySelectorAll('#playlist li');
 
     let currentIndex = 0;
 
     // Function to load song
     function loadSong(songIndex) {
         const selectedItem = playlistItems[songIndex];
         audio.src = selectedItem.dataset.file;
         title.textContent = selectedItem.dataset.title;
         artist.textContent = selectedItem.dataset.artist;
         cover.src = selectedItem.dataset.cover;
     }
 
     // Load initial song
     loadSong(currentIndex);
 
     // Play or Pause
     document.getElementById('play').addEventListener('click', function () {
         if (audio.paused) {
             audio.play();
             this.textContent = '⏸';
         } else {
             audio.pause();
             this.textContent = '⏯';
         }
     });
 
     // Next song
     document.getElementById('next').addEventListener('click', function () {
         currentIndex = (currentIndex + 1) % playlistItems.length;
         loadSong(currentIndex);
         audio.play();
         document.getElementById('play').textContent = '⏸';
     });
 
     // Previous song
     document.getElementById('prev').addEventListener('click', function () {
         currentIndex = (currentIndex - 1 + playlistItems.length) % playlistItems.length;
         loadSong(currentIndex);
         audio.play();
         document.getElementById('play').textContent = '⏸';
     });
 
     // Playlist item click event
     playlistItems.forEach((item, index) => {
         item.addEventListener('click', function (e) {
             e.preventDefault(); // Prevent default action (which would be download)
             currentIndex = index;
             loadSong(currentIndex);
             audio.play();
             document.getElementById('play').textContent = '⏸';
         });
     });
 });
 