
// Initialization Of variables.

let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let progressLine = document.getElementById('progressLine');
let masterBack = document.getElementById('masterBack');
let masterPlay = document.getElementById('masterPlay');
let masterNext = document.getElementById('masterNext');
let masterIcon = document.getElementById('masterIcon');
let myGif = document.getElementById('myGif');
let masterName = document.getElementById('masterName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

// We create a Array for list of songs.

let songs = [
    {songName: "Vikram Theme", filePath: "Songs/1.mp3", coverPath: "Cover/01.jpg"},
    {songName: "Ek Sher To Tum", filePath: "Songs/2.mp3", coverPath: "Cover/02.jpg"},
    {songName: "Rock My Kiss", filePath: "Songs/3.mp3", coverPath: "Cover/03.jpg"},
    {songName: "Baby One More Time", filePath: "Songs/4.mp3", coverPath: "Cover/04.jpg"},
    {songName: "Capital Letters", filePath: "Songs/5.mp3", coverPath: "Cover/05.jpg"},
    {songName: "Left And Right", filePath: "Songs/6.mp3", coverPath: "Cover/06.jpg"},
    {songName: "Bilionera", filePath: "Songs/7.mp3", coverPath: "Cover/07.jpg"},
    {songName: "Pretty Girl", filePath: "Songs/8.mp3", coverPath: "Cover/08.jpg"},
    {songName: "Position", filePath: "Songs/9.mp3", coverPath: "Cover/09.jpg"},
    {songName: "We Don't Talk Anymore", filePath: "Songs/10.mp3", coverPath: "Cover/10.jpg"}
]

// We create a click event listener functions for buttons.

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        myGif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        myGif.style.opacity = 0;
    }
})

// masterIcon.addEventListener('click', ()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterIcon.classList.remove('fa-circle-play');
//         masterIcon.classList.add('fa-circle-pause');
//         myGif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         masterIcon.classList.add('fa-circle-play');
//         masterIcon.classList.remove('fa-circle-pause');
//         myGif.style.opacity = 0;
//     }
// })

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressLine.value = progress;
})

songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

progressLine.addEventListener('change', ()=>{
    audioElement.currentTime = progressLine.value * audioElement.duration/100; 
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('noOfSongs')).forEach((element)=>{
        element.classList.remove('fa-music');
        element.classList.add('fa-music');
    })
}

Array.from(document.getElementsByClassName('noOfSongs')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-music');
        e.target.classList.add('fa-music');
        audioElement.src = `Songs/${songIndex +1}.mp3`;
        masterName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('masterBack').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Songs/${songIndex +1}.mp3`;
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('masterNext').addEventListener('click', ()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex +1}.mp3`;
    masterName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
// ......................................... xxxxx ......................................... 