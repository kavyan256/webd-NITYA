window.onload = function () {
    var video = document.getElementById('hero-video');
    var playPauseButton = document.getElementById('btn');
    
    playPauseButton.innerText = 'Play'; 

    playPauseButton.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseButton.innerText = 'Stop';
        } else {
            video.pause();
            playPauseButton.innerText = 'Play'; 
        }
    });
    video.play();
    playPauseButton.innerText = 'Pause';
};
