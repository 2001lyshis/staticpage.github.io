const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const musicCover = document.getElementById("music-cover");

// 音乐信息
const songs = ["bouquet", "Nyan Cat", "Torches",
                 "Nevada", "Leshphon", "Sweet Rumors"];
const ip = ["http://m10.music.126.net/20210811232207/0f3c9a1baf1d434a237f4bf7b8192f69/ymusic/da46/492d/6789/d0b19b1c66971e852759ab4c4460eb6d.mp3",
    "http://m801.music.126.net/20210811232255/09039dd61781aeb4283319a01c6c1bef/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/7303992570/c21b/712f/f70f/4dd1bb7dc026258b516da900931828ed.mp3",
    "http://m801.music.126.net/20210811232429/af72fd78ac5dddd7b52342a7ea11f53d/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8777094442/1403/18b0/c939/7889e3c3786165d286a1efe8cc280557.mp3",
    "http://m10.music.126.net/20210811232414/b57e64397088b6f1d08ac21aa3161500/ymusic/d336/66b8/93f6/53a73538fb4a283e3694ca5e48e4f9c8.mp3",
    "http://m10.music.126.net/20210811232506/121d529f63c4c37ecf5eada31e57f1a3/ymusic/9948/6165/d1fa/6a0b2b2e80ae2ebdffe51524b3bd34b4.mp3",
    "http://m10.music.126.net/20210811232356/337453af5671b01015bc736236df7183/ymusic/b341/e8ce/c276/f3a35839fcc91c52bf873ba1aa909a57.mp3"
]
// 默认从第一首开始
let songIndex = 0;
// 将歌曲细节加载到DOM
loadSong(songs[songIndex]);
// 更新歌曲细节
function loadSong(song) {
    title.innerHTML = song;
    audio.src = ip[songIndex];
    musicCover.src = `index/img/${song}.jpg`;
}

// 播放歌曲
function playSong() {
    // 元素添加类名
    musicContainer.classList.add("play");
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play()
}

// 停止播放
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// 上一首
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    // 加载歌曲信息并播放
    loadSong(songs[songIndex]);
    playSong()
}
// 下一首
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

// 进度条更新
function updateProgress(e) {
    // audio.duration: 音频长度
    // audio.currentTime: 音频播放位置
    // 对象解构操作
    const {
        duration,
        currentTime
    } = e.target;
    // e.target = {
    //     duration: 225,  // 当前音频时间长度
    //     currentTime:0  // 当前播放时间
    // }
    const progressPercent = (currentTime / duration) * 100;
    // 进度条
    progress.style.width = `${progressPercent}%`
}
// 设置进度条
function setProgress(e) {
    // progressContainer代理视图宽度
    const width = this.clientWidth;
    // 鼠标点击时处于progressContainer里的水平偏移量
    const clickX = e.offsetX;

    // audio.duration: 音频长度
    const duration = audio.duration;

    // audio.currentTime: 音频播放位置
    audio.currentTime = (clickX / width) * duration
}
// 事件监听
// 1.播放歌曲
playBtn.onclick = function () {
    // 判断当前是否是正在播放

    // const isPlaying = musicContainer.classList.contains('play')
    // if (isPlaying) {
    //     pauseSong()
    // } else {
    //     playSong()
    // }
    musicContainer.classList.contains('play') ? pauseSong() : playSong()
};
// 2.切换歌曲
prevBtn.onclick = prevSong;
nextBtn.onclick = nextSong;
// 3.播放器进度条相关
// 3.1 设置播放进度
progressContainer.onclick = setProgress;
// 3.2 进度条更新
audio.ontimeupdate = updateProgress;
// 3.3 歌曲结束后自动下一首
audio.onended = nextSong