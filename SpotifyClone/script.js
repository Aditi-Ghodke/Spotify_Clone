console.log("Welcome To Spotify");

//initialize the variables
var songIndex = 0;
var audioElement = new Audio('https://www.pagalworld.com.se/kesariya-song-download-2022.html');
var masterPlay = document.getElementById('masterPlay');
var pause_id = document.getElementById('pause_id');
var myProgressBar = document.getElementById('myProgressBar');
var gif = document.getElementById('gif');


var songs = [
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },
    {songName: "Kesariya", filePath: "https://pagalsong.in/uploads/systemuploads/mp3/Brahmastra/Kesariya%20-%20Brahmastra%20128%20Kbps.mp3",coverPath: "https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?pid=ImgDet&rs=1" },

]

// audioElement.play();

// handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa');
        pause_id.classList.add('fa');
        gif.style.opacity = 1;
    }
});

pause_id.addEventListener('click', ()=>{
    if(audioElement.played || audioElement.currentTime>=0){
        audioElement.pause();
        pause_id.classList.remove('fa');
        masterPlay.classList.add('fa');
        gif.style.opacity = 1;
    }
});


// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    console.log(progress)
})