import * as playBtn from '../src/img/playbutton.png';
//script tag
const scriptTag = document.createElement('script');
scriptTag.src = "https://www.youtube.com/iframe_api";
scriptTag.type = "text/javascript";

var player;
function onYouTubeIframeAPIReady(width,height) {
    player = new YT.Player('coverImage', {
        height: 360,
        width: width,
        videoId: 'YE7VzlLtp-4',
        playerVars: {
            controls: 0,
            modestbranding: 0,
            iv_load_policy: 3
        },
        events: {
            'onReady': onvideoReady
        }
    });
};

function onvideoReady(e){
    
    
    e.target.playVideo();


}

const playButton = document.createElement('img');
playButton.src = playBtn; 

const coverImage = document.getElementById('coverImage');
const framewidth = 920;

coverImage.style.backgroundImage = "url('"+coverImage.dataset.image+"')";
coverImage.style.width = framewidth + "px";
coverImage.style.height = framewidth/1.778 + "px";
coverImage.style.backgroundRepeat = "no-repeat";
coverImage.style.backgroundSize = "cover";

playButton.style.marginLeft = ((coverImage.clientWidth/2) - 64) + "px";
playButton.style.marginTop = ((coverImage.clientHeight/2) - 64) + "px";
coverImage.appendChild(playButton);
coverImage.addEventListener("click",function(e){
    console.log(e.target.clientWidth);
    console.log(e.target.clientHeight);
    playButton.style.display = "none";
    // const youtubeVideo = document.createElement('iframe');
    // youtubeVideo.src = "https://www.youtube.com/embed/XkYk9XU7M9A?autoplay=1";
    // youtubeVideo.width = this.clientWidth;
    // youtubeVideo.height = this.clientHeight;
    // youtubeVideo.frameBorder = "0";
    // coverImage.appendChild(youtubeVideo);
    onYouTubeIframeAPIReady(this.clientWidth, this.clientHeight);
});

// add script tag to head
const headArea = document.querySelector('body');
headArea.appendChild(scriptTag);












