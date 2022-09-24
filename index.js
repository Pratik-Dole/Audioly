
console.log("welcome here !!")

let songIndex = 0;
let audioElement = new Audio('/Songs/01.mp3');
let progressLine = document.getElementById('progressLine');
let masterBack = document.getElementById('masterBack');
let masterPlay = document.getElementById('masterPlay');
let masterNext = document.getElementById('masterNext');
let masterIcon = document.getElementById('masterIcon');
let myGif = document.getElementById('myGif');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Vikram Theme", filePath: "Songs/01.mp3", coverPath: "Cover/01.jpg"},
    {songName: "Ek Sher To Tum", filePath: "Songs/02.mp3", coverPath: "Cover/02.jpg"},
    {songName: "Rock My Kiss", filePath: "Songs/03.mp3", coverPath: "Cover/03.jpg"},
    {songName: "Baby One More Time", filePath: "Songs/04.mp3", coverPath: "Cover/04.jpg"},
    {songName: "Baby One More Time", filePath: "Songs/05.mp3", coverPath: "Cover/05.jpg"},
    {songName: "Left And Right", filePath: "Songs/06.mp3", coverPath: "Cover/06.jpg"},
    {songName: "Bilionera", filePath: "Songs/07.mp3", coverPath: "Cover/07.jpg"},
    {songName: "Pretty Girl", filePath: "Songs/08.mp3", coverPath: "Cover/08.jpg"},
    {songName: "Position", filePath: "Songs/09.mp3", coverPath: "Cover/09.jpg"},
    {songName: "We Don't Talk Anymore", filePath: "Songs/10.mp3", coverPath: "Cover/10.jpg"}
]
// audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        myGif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
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

progressLine.addEventListener('change', ()=>{
    audioElement.currentTime = progressLine.value * audioElement.duration/100; 
})

songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('')).forEach((element)=>{
        element.classList.add('');
    })
}

Array.from(document.getElementsByClassName('noOfSongs')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        e.target.classList.remove('')
        e.target.classList.add('')
    })
})
// ......................................... xxxxx ......................................... 