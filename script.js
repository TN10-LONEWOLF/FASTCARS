document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('wildlifeVideo');
    const toggleBtn = document.getElementById('toggleBtn');
    const videoContainer = document.getElementById('videoContainer');

    toggleBtn.addEventListener('click', () => {
        const isHidden = videoContainer.classList.contains('hidden');

        if (isHidden) {
            // State 1: Video is hidden. Action: Show and play.
            videoContainer.classList.remove('hidden');
            video.play();
            toggleBtn.textContent = 'Hide Video';
            toggleBtn.setAttribute('aria-expanded', 'true');
        } else {
            // State 2: Video is visible.
            if (video.paused) {
                // If it is NOT playing already, play it.
                video.play();
                toggleBtn.textContent = 'Hide Video';
            } else {
                // If it IS playing, hide it (and pause it to prevent audio from playing in the background).
                video.pause();
                videoContainer.classList.add('hidden');
                toggleBtn.textContent = 'Show & Play Video';
                toggleBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});