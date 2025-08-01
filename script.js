const songs = [
    {
        title: 'Pooste Shir',
        artist: 'Ebi',
        image: 'img/posteshir.jpg',
        audio: 'song/Ebi Pooste Shir.mp3'
    },
    {
        title: 'Gheseye Eshgh',
        artist: 'Ebi',
        image: 'img/Gheseye-Eshgh.jpg',
        audio: 'song/Ebi-Gheseh-Eshgh.mp3'
    },
    {
        title: 'Geryeh Nakon ',
        artist: 'Ebi',
        image: 'img/gerye-nakn.jpg',
        audio: 'song/Ebi-Geryeh-Nakon-128.mp3'
    },

    {
        title: 'Harighe Sabz',
        artist: 'Ebi',
        image: 'img/harighe-sabz.jpg',
        audio: 'song/Ebi-Harighe-Sabz.mp3'
    },
    {
        title: 'In Akharin Bare',
        artist: 'Ebi',
        image: 'img/in-akharinbare.jpg',
        audio: 'song/Ebi-In-Akharin-Bare.mp3'
    },
   
    {
        title: 'Navazesh',
        artist: 'Ebi',
        image: 'img/Navazesh.jpg',
        audio: 'song/Ebi-Navazesh.mp3'
    },
    {
        title: 'Masteh Cheshaat',
        artist: 'Ebi',
        image: 'img/Maste-Cheshat.jpg',
        audio: 'song/Masteh Cheshaat   Ebi.mp3'
    },
    {
        title: 'Picak',
        artist: 'Ebi',
        image: 'img/picak.jpg',
        audio: 'song/Pichak-Ebi.mp3'
    },
    {
        title: 'Tamash',
        artist: 'Shadmehr Aghili',
        image: 'img/tamasha.jpg',
        audio: 'song/Shadmehr Aghili Tamasha.mp3'
    },
    {
        title: 'Bi Ehsas',
        artist: 'Shadmehr Aghili',
        image: 'img/biehsas.jpg',
        audio: 'song/Shadmehr-Aghili-Bi-Ehsas-(Live-In-Concert)-320.mp3'
    },
    {
        title: 'Ghazi',
        artist: 'Shadmehr Aghili',
        image: 'img/Ghazi.jpg',
        audio: 'song/Shadmehr-Aghili-Ghazi.mp3'
    },
    {
        title: 'Ham Nafas',
        artist: 'Shadmehr Aghili',
        image: 'img/Ham Nafas.jpg',
        audio: 'song/Shadmehr-Aghili-Ham-Nafas.mp3'
    },
    {
        title: 'Hamishegi',
        artist: 'Shadmehr Aghili',
        image: 'img/Hamishegi.jpg',
        audio: 'song/Shadmehr-Aghili-Hamishegi.mp3'
    },
    {
        title: 'Hesse Khoobie',
        artist: 'Shadmehr Aghili',
        image: 'img/hesekhobie.jpg',
        audio: 'song/Shadmehr-Aghili-Hesse-Khoobie.mp3'
    },
    {
        title: 'Rooze Sard',
        artist: 'Shadmehr Aghili',
        image: 'img/Rooze-Sard.jpg',
        audio: 'song/Shadmehr-Aghili-Rooze-Sard.mp3'
    },
    {
        title: 'Sarnevesht',
        artist: 'Shadmehr Aghili',
        image: 'img/Sarnevesht.jpg',
        audio: 'song/Shadmehr-Aghili-Sarnevesht.mp3'
    },
    {
        title: 'Yakh Zadam',
        artist: 'Shadmehr Aghili',
        image: 'img/yakh-zadam.jpg',
        audio: 'song/Shadmehr-Aghili-Yakh-Zadam.mp3'
    },
    {
        title: 'Taghdir',
        artist: 'Shadmehr Aghili',
        image: 'img/taghdir.jpg',
        audio: 'song/Taghdir   Shadmehr Aghili.mp3'
    },

]




const box = document.getElementById('mysongs')

const MiniPlayer = new Audio()
const MiniPic = document.getElementById('MiniPic')
const MiniTitle = document.getElementById('MiniTitle')
const MiniArtist = document.getElementById('MiniArtist')
const MiniBox = document.getElementById('MiniBox')


let likedList = []
const likeBtn = document.getElementById('likeBtn')

const stop = document.getElementById('stopBtn')

let thisIndex = 0


const open = document.getElementById('open')

const fullPlayer = document.getElementById('fullPlayer')
const fullPic = document.getElementById('fullPic')
const fullTitle = document.getElementById('fullTitle')
const fullArtist = document.getElementById('fullArtist')

open.addEventListener('click', () => {
    fullPlayer.classList.toggle('hidden')

    if (!fullPlayer.classList.contains('hidden')) {
        const currentSong = songs[thisIndex]
        fullPic.src = currentSong.image
        fullTitle.textContent = currentSong.title
        fullArtist.textContent = currentSong.artist
    }
    Playlist()

})

const close = document.getElementById('close')

close.addEventListener('click', () => {
    fullPlayer.classList.add('hidden')

})



const searchBtn = document.getElementById('searchBtn')
const searchInput = document.getElementById('searchInput')



searchInput.addEventListener('input', () => {
    const value = searchInput.value.toLowerCase()
    const slides = document.querySelectorAll('.swiper-slide')

    slides.forEach(slide => {
        const title = slide.querySelector('h3')?.textContent.toLocaleLowerCase()

        if (title && title.includes(value)) {
            slide.style.display = 'flex'
        } else {
            slide.style.display = 'none'
        }
    })
})



const sound = document.getElementById('sound')
sound.addEventListener('input', () => {
    MiniPlayer.volume = sound.value
})



const speaker = document.getElementById('speaker')
speaker.addEventListener('click', () => {
    if (MiniPlayer.volume > 0) {
        MiniPlayer.volume = 0
        sound.value = 0
        speaker.className = 'icon-volume-off-1  text-white/40  text-xl'

    } else {
        MiniPlayer.volume = 1
        sound.value = 1
        speaker.className = 'icon-volume  text-white/40  text-xl'
    }
})




const leftSide = document.getElementById('leftSide')
const menu = document.querySelector('.icon-menu')

menu.addEventListener('click', () => {
    leftSide.classList.toggle('sideHide')

})




songs.forEach(song => {

    const slide = document.createElement('div')
    slide.className = "swiper-slide cursor-pointer"
    slide.style.width = '250px'

    slide.innerHTML = `
    <img src="${song.image}" alt="${song.title}" class="w-14 h-14 object-cover rounded">
    <div class="flex flex-col">
      <h3 class="font-bold text-sm leading-tight">${song.title}</h3>
      <p class="text-xs text-gray-400">${song.artist}</p>
    </div>`


    slide.addEventListener('click', () => {
        thisIndex = songs.indexOf(song)
        thisSong(thisIndex)

    })

    box.appendChild(slide)
})





stopBtn.addEventListener('click', () => {
    if (MiniPlayer.paused) {
        MiniPlayer.play()
        stopBtn.innerHTML = `<i class= 'icon-pause-2'></i>`

    } else {
        MiniPlayer.pause()
        stopBtn.innerHTML = `<i class= ' icon-play-1'></i>`
    }
})




const prevBtn = document.getElementById('prevBtn')
const nextBtn = document.getElementById('nextBtn')


nextBtn.addEventListener('click', () => {
    thisIndex = (thisIndex + 1) % songs.length

    thisSong(thisIndex)
})


prevBtn.addEventListener('click', () => {
    thisIndex = (thisIndex - 1 + songs.length) % songs.length
    thisSong(thisIndex)
})




function thisSong(index) {
    const song = songs[index]
    MiniPlayer.src = song.audio
    MiniPic.src = song.image
    MiniTitle.textContent = song.title
    MiniArtist.textContent = song.artist
    MiniPlayer.play()
    MiniBox.classList.remove('hidden')
    MiniBox.classList.add('flex')
    stopBtn.innerHTML = `<i class= 'icon-pause-2'></i>`

    const background = document.getElementById('background')
    background.style.backgroundImage = `url(${song.image})`

    updateFullPlayer()

    if (likedList.some(s => s.title === song.title)) {
        likeBtn.classList.remove('icon-heart-empty')
        likeBtn.classList.add('icon-heart')
    } else {
        likeBtn.classList.remove('icon-heart')
        likeBtn.classList.add('icon-heart-empty')
    }
}



function updateFullPlayer() {
    const currentSong = songs[thisIndex]
    fullPic.src = currentSong.image
    fullTitle.textContent = currentSong.title
    fullArtist.textContent = currentSong.artist

    if (MiniPlayer.paused) {
        fullStopBtn.innerHTML = `<i class="icon-play-1"></i>`
    } else {
        fullStopBtn.innerHTML = `<i class="icon-pause-2"></i>`
    }
}


const fullPrevBtn = document.getElementById('fullPrevBtn')
const fullNextBtn = document.getElementById('fullNextBtn')
const fullStopBtn = document.getElementById('fullStopBtn')

fullPrevBtn.addEventListener('click', () => {
    thisIndex = (thisIndex - 1 + songs.length) % songs.length
    thisSong(thisIndex)
    updateFullPlayer()
})

fullNextBtn.addEventListener('click', () => {
    thisIndex = (thisIndex + 1) % songs.length
    thisSong(thisIndex)
    updateFullPlayer()
})



fullStopBtn.addEventListener('click', () => {
    if (MiniPlayer.paused) {
        MiniPlayer.play()
        fullStopBtn.innerHTML = `<i class="icon-pause-2"></i>`
    } else {
        MiniPlayer.pause()
        fullStopBtn.innerHTML = `<i class="icon-play-1"></i>`
    }
})

const time = document.getElementById('time')

MiniPlayer.addEventListener('timeupdate', () => {
    if (!fullPlayer.classList.contains('hidden') && !isNaN(MiniPlayer.duration)) {
        const percent = (MiniPlayer.currentTime / MiniPlayer.duration) * 100
        time.value = percent
    }
})

time.addEventListener('input', () => {
    if (!isNaN(MiniPlayer.duration)) {
        const newTime = (time.value / 100) * MiniPlayer.duration
        MiniPlayer.currentTime = newTime
    }
})


const fullSong = document.getElementById("fullSongList")

function Playlist() {
    fullSong.innerHTML = ''

    songs.forEach((song, i) => {
        const div = document.createElement('div')
        div.className = 'gap-4 flex cursor-pointer rounded hover:bg-white/10 duration-200'
        div.innerHTML = `
        <img src='${song.image}' class='w-12 h-12 object-cover rounded ' />
        <div>
            <h4 class='text-sm font-bold '> ${song.title}</h4>
            <p class='text-xs '> ${song.artist}</p>
        <div>
        `

        div.addEventListener("click", () => {
            thisIndex = i
            thisSong(thisIndex)
            MiniPlayer.play()
        })
        fullSong.appendChild(div)
    })


}


const background = document.getElementById('background')
const currentSong = songs[thisIndex]

background.style.backgroundImage = `url(${currentSong.image})`




likeBtn.addEventListener('click', () => {
    const currentSong = songs[thisIndex]

    const liked = likedList.find(song => song.title === currentSong.title)

    if (!liked) {
        likedList.push(currentSong)
        likeBtn.classList.remove('icon-heart-empty')
        likeBtn.classList.add('icon-heart')
    } else {
        likedList = likedList.filter(song => song.title !== currentSong.title)
        likeBtn.classList.remove('icon-heart')
        likeBtn.classList.add('icon-heart-empty')
    }

    updateLike()
    saveLike()


})



function updateLike() {
    const likeBox = document.getElementById('likeBox')
    likeBox.innerHTML = ''

    likedList.forEach(song => {
        const div = document.createElement('div')
        div.className = 'p-4 '
        div.innerHTML = `
        <img src="${song.image}" alt="${song.title}" class="w-12 h-12 object-cover rounded">
        <div class="flex flex-col">
            <h3 class="font-bold text-sm leading-tight">${song.title}</h3>
            <p class="text-xs text-gray-400">${song.artist}</p>
        </div>`


        div.addEventListener('click', () => {
            const num = songs.findIndex(s => s.title === song.title)
            if (num !== -1) {
                thisIndex = num
                thisSong(num)
            }
        })


        likeBox.appendChild(div)

    })
}

const lefticon = document.getElementById('lefticon')
const righticon = document.getElementById('righticon')
const boxScroll = document.getElementById('boxScroll') 

const scrollNum = 300

lefticon.addEventListener('click', ()=>{
    boxScroll.scrollBy({left: -scrollNum , behavior:'smooth'})
})

righticon.addEventListener('click', ()=>{
    boxScroll.scrollBy({left: scrollNum , behavior:'smooth'})
})





function saveLike() {
    localStorage.setItem('likedList', JSON.stringify(likedList))
}




function loadLike() {
    const save = localStorage.getItem('likedList')
    if (save) {
        likedList = JSON.parse(save)
        updateLike()
    }
}


loadLike()





const swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    freeMode: true,
    mousewheel: true,
    freeModeMomentum: false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
});

