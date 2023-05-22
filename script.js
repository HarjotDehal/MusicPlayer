let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongTime = document.getElementById('masterSongTime');

hu
let songs = [
    {songName: "Signed to God - Sidhu Moose Wala", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" , timess: "02:27"},
    {songName: "On Top - Karan Aujla", filePath: "songs/2.mp3", coverPath: "covers/2.jpg", timess:"03:03"},
    {songName: "Gabhru - Babbu Maan", filePath: "songs/3.mp3", coverPath: "covers/3.jpg", timess: "05:54"},
    {songName: "Haan Haige Aa - Karan Aujla", filePath: "songs/4.mp3", coverPath: "covers/4.jpg", timess:"03:29"},
    {songName: "PB-65 - Sidhu Moose Wala", filePath: "songs/5.mp3", coverPath: "covers/5.jpg", timess:"02:41"},
    {songName: "Rude Boy - Jazzy B", filePath: "songs/6.mp3", coverPath: "covers/6.jpg", timess:"03:31"},
    {songName: "Ask about me - Karan Aujla", filePath: "songs/7.mp3", coverPath: "covers/7.jpg", timess:"04:19"},
    {songName: "El Chapo - Sidhu Moose Wala", filePath: "songs/8.mp3", coverPath: "covers/8.jpg", timess: "03:28"},
    {songName: "Akhian Nimanian - Amrinder Gill", filePath: "songs/9.mp3", coverPath: "covers/9.jpg", timess:"03:48"},
    {songName: "Unreachable - Karan Aujla", filePath: "songs/10.mp3", coverPath: "covers/10.jpg", timess:"03:57"},
    {songName: "Goli - Sidhu Moose Wala", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" , timess: "02:27"},
    {songName: "Bhabi - Kamal Khaira", filePath: "songs/12.mp3", coverPath: "covers/12.jpg", timess:"03:03"},
    {songName: "Charged Up (Udna Sapp) - Jxggi ", filePath: "songs/13.mp3", coverPath: "covers/13.jpg", timess: "05:54"},
    {songName: "Ink - Karan Aujla", filePath: "songs/14.mp3", coverPath: "covers/14.jpg", timess:"03:29"},
    {songName: "Talk - Jordan Sandhu", filePath: "songs/15.mp3", coverPath: "covers/15.jpg", timess:"02:41"},
    {songName: "Brown Rang - Honey Singh", filePath: "songs/16.mp3", coverPath: "covers/16.jpg", timess:"03:31"},
    {songName: "Jatt di Janeman - Arjan Dhillon", filePath: "songs/17.mp3", coverPath: "covers/17.jpg", timess:"04:19"},
    {songName: "Kharkhu - Diljit Dosanjh", filePath: "songs/18.mp3", coverPath: "covers/18.jpg", timess: "03:28"},
    {songName: "Mull Pyaar Da - Arjan Dhillon", filePath: "songs/19.mp3", coverPath: "covers/19.jpg", timess:"03:48"},
    {songName: "Droptop - AP Dhillon", filePath: "songs/20.mp3", coverPath: "covers/20.jpg", timess:"03:57"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
//  this is changing the names, covers and sources and for each which is picked in the html document. 


// function songNumber(element){

//     for (let index = 0; index < 10; index++) {
//         if(element.getElementsByClassName("songName")[i].innerText == masterSongName){
//             return i;
//         }
//     }

// }

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        // makeonePause();
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        // i = songNumber(element);
        // makeonePause();
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseFloat((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;

    // This will automatically go to the next song now. Good
    if(myProgressBar.value == 100){

        makeAllPlays();
        if(songIndex>=19){
            songIndex = 0
        }
        else{
            songIndex += 1;
        }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        masterSongTime = songs[songIndex].timess;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        

    }
})
// the one above is the percentage we are throughout our song
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

    // if(myProgressBar.value == 100){
    //     if(songIndex>=9){
    //         songIndex = 0
    //     }
    //     else{
    //         songIndex += 1;
    //     }
    //     audioElement.src = `songs/${songIndex+1}.mp3`;
    //     masterSongName.innerText = songs[songIndex].songName;
    //     audioElement.currentTime = 0;
    //     audioElement.play();
    //     masterPlay.classList.remove('fa-play-circle');
    //     masterPlay.classList.add('fa-pause-circle');
        

    // }

})


// myProgressBar.add

// this makes percentage times our total duration divided by 100. It works
// const makeonePause = ()=>{

//     Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
//         element.firstChild.classList.add('fa-pause-circle');
//         element.firstChild.classList.remove('fa=play-circle');



//         // element.classList.remove('fa-play-circle');
//         // element.classList.add('fa-pause-circle');

// })}

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const makenoneCurrent = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('current');
        // element.classList.add('fa-play-circle');
    })
}


// This is making everything back to play button real quick


// This is changing the picked song, 
// good logic, whenever you click play from top, it changes all this stuff

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        
        
        if( e.target.classList.contains('fa-play-circle')    && e.target.classList.contains('current') ){
            makeAllPlays();
            makenoneCurrent();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            e.target.classList.add('current')
            // audioElement.src = `songs/${songIndex+1}.mp3`;
            // masterSongName.innerText = songs[songIndex].songName;
            // audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    }
        else if( e.target.classList.contains('fa-play-circle')){
                makeAllPlays();
                makenoneCurrent();
                songIndex = parseInt(e.target.id);
                e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle');
                e.target.classList.add('current')
                audioElement.src = `songs/${songIndex+1}.mp3`;
                masterSongName.innerText = songs[songIndex].songName;
                masterSongTime = songs[songIndex].timess;
                audioElement.currentTime = 0;
                audioElement.play();
                gif.style.opacity = 1;
                masterPlay.classList.remove('fa-play-circle');
                masterPlay.classList.add('fa-pause-circle');
        }
        else{


            audioElement.pause();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;

        }
    
    
    
})
})


// this changes element to next one. goes back to 0 if its last one. 
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=19){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    makenoneCurrent();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongTime = songs[songIndex].timess;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // masterSongTime = 32;
})

// We want to put the correct time for each song which we have


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    makeAllPlays();
    makenoneCurrent();
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    masterSongTime = songs[songIndex].timess;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    // makeAllPlays();



})





