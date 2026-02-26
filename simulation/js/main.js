/**
 * Opens the specific video overlay and starts playback.
 */
function showSimulation(id) {
    const overlay = document.getElementById(id);
    if (overlay) {
        overlay.style.display = 'flex';
        const video = overlay.querySelector('video');
        if (video) {
            video.play();
        }
    }
}

/**
 * Closes the video overlay and resets the video to the beginning.
 */
function hideSimulation(id) {
    const overlay = document.getElementById(id);
    if (overlay) {
        overlay.style.display = 'none';
        const video = overlay.querySelector('video');
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
}
