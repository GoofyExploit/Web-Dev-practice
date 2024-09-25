console.log('lets write javascript');
let currentSong = new Audio();
let songs;
let currFolder;

function formatTime(seconds) {
    if (isNaN(seconds) || seconds === undefined) {
        return "0:00"; // Default value when seconds is not a valid number
    }
    seconds = Math.floor(seconds); // Round down to the nearest whole number
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    // Pad with leading zeros if needed
    minutes = minutes < 10 ? minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    return `${minutes}:${remainingSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    try {
        let response = await fetch(`http://127.0.0.1:61471/Projects/WannaJam/songs/${folder}`);
        if (!response.ok) {
            console.error(`Error fetching songs: ${response.status} ${response.statusText}`);
            return [];
        }
        let html = await response.text();
        let div = document.createElement("div")
        div.innerHTML = html
        let as = div.getElementsByTagName("a")
        let songs = []
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                let songUrl = new URL(element.href);
                let songName = songUrl.pathname.split('/').pop();
                songs.push(songName);
            }
        }

        // show all the songs in the playlist
        let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
        songUL.innerHTML = ''
        for (const song of songs) {
            let trimmedName = song.slice(0, -4)
            songUL.innerHTML = songUL.innerHTML + `<li>
                            <img src="images/music-solid.svg" alt="">
                            <div class="info">
                                <div>${trimmedName}</div>
                                <div>Lucky</div>
                            </div>
                            <div class="playNow">
                                <div>Play Now</div>
                                <img class="invert" src="images/play-solid.svg" alt="">
                            </div>
                        </li>`.replaceAll("%20", " ");
        }

        // Attach an event listener to each song
        Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
            e.addEventListener("click", element => {
                console.log(e.querySelector(".info").firstElementChild.innerHTML + ".mp3");
                playMusic(e.querySelector(".info").firstElementChild.innerHTML + ".mp3")
            })
        })

        return songs

    } catch (error) {
        console.error(`Error fetching songs: ${error}`);
        return [];
    }
}

const playMusic = (track, pause = false) => {
    let trimmedName = track.slice(0, -4)
    currentSong.src = `/Projects/WannaJam/songs${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "images/pause-solid.svg"
    }
    document.querySelector(".songInfo").innerHTML = trimmedName
    document.querySelector(".songTime").innerHTML = "0:00 / 3:14"
}

async function displayAlbum() {
    let response = await fetch(`http://127.0.0.1:61471/Projects/WannaJam/songs/`);
    let html = await response.text();
    let div = document.createElement("div")
    div.innerHTML = html
    console.log(div);
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index];
        if(e.href.includes("songs")){
            let folder = e.href.split("songs").slice(-1)[0]
            if (folder !== '') { // Add this check
                // Get Metadata of the folder
                let a = await fetch(`http://127.0.0.1:61471/Projects/WannaJam/songs/${folder}/info.json`)
                let response = await a.json()
                console.log(response);
                cardContainer.innerHTML = cardContainer.innerHTML + `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <img src="images/play.svg" alt="play">
                            <img src="songs${folder}/cover.jpg" alt="cover image">
                            <p>${response.description}</p>
                        </div>
                    </div>`
            }
        }
    
    }

        // Load the playlist whenever the card is clicked
        Array.from(document.getElementsByClassName("card")).forEach(e => {
            e.addEventListener("click", async item => {
                console.log("Card clicked:", item.currentTarget.dataset.folder);
                songs = await getSongs(`${item.currentTarget.dataset.folder}`)
                console.log("Fetched songs:", songs);
                playMusic(songs[0])
            })
        })
    
}

async function main() {
    // Get a list of all the songs
    songs = await getSongs("pop/")
    songs = await getSongs("jazz/")
    playMusic(songs[0], true)

    // Display al the albums on the page
    displayAlbum()

    // Attach an event listener to previous, play and next
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "images/pause-solid.svg"
        } else {
            currentSong.pause()
            play.src = "images/play-solid.svg"
        }
    })

    // Listen for timeUpdate event
    currentSong.addEventListener("timeupdate", () => {
        // console.log(currentSong.currentTime, currentSong.duration)
        document.querySelector(".songTime").innerHTML = `${formatTime(currentSong.currentTime)} / ${formatTime(currentSong.duration)}`
        document.querySelector(".circle").style.left = ((currentSong.currentTime / currentSong.duration) * 100 - 1) + "%";

    })

    // Add an event Listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let seekbar = e.target.getBoundingClientRect();
        let clickPosition = (e.clientX - seekbar.left) / seekbar.width;
        currentSong.currentTime = clickPosition * currentSong.duration;
        document.querySelector(".circle").style.left = (clickPosition * 100 - 1) + "%";
    });

    // Add an event Listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event Listener for Close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-110%"
    })

    // Add an event Listener to previous and next
    previous.addEventListener("click", () => {
        // console.log('previous clicked');
        let currentSongName = (currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(currentSongName)
        if ((index - 1) >= 0) {
            let PreviousSong = songs[index - 1]
            // console.log('Previous Song: ', PreviousSong);
            playMusic(decodeURIComponent(PreviousSong))
        }
    })
    next.addEventListener("click", () => {
        // console.log('next clicked');
        let currentSongName = (currentSong.src.split("/").slice(-1)[0])
        let index = songs.indexOf(currentSongName)
        if ((index + 1) < songs.length) {
            let nextSong = songs[index + 1]
            // console.log('Next Song: ', nextSong);
            playMusic(decodeURIComponent(nextSong))
        }
    })

    // Add an event Listener to Volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log(e, e.target, e.target.value)
        currentSong.volume = parseInt(e.target.value) / 100
    })

    // Add event Listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{
        if(e.target.src.includes("images/volume-high-stroke-rounded.svg")){
            e.target.src =  e.target.src.replace("images/volume-high-stroke-rounded.svg","images/mute.svg")
            currentSong.volume = 0
        }
        else{
            e.target.src =  e.target.src.replace("images/mute.svg","images/volume-high-stroke-rounded.svg")
            currentSong.volume = .1
        }
    })

}

main()