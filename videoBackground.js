(function () {
    const VIDEO_URL =
        "https://raw.githubusercontent.com/TWOJ_LOGIN/spotify-video-background/main/background.mp4";

    function addVideo() {
        if (document.getElementById("spicetify-video-background")) return;

        const video = document.createElement("video");
        video.id = "spicetify-video-background";

        video.src = VIDEO_URL;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.playsInline = true;

        video.style.cssText = `
            position: fixed !important;
            inset: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
            pointer-events: none !important;
            z-index: -1 !important;
            opacity: 0.4 !important;
        `;

        document.body.prepend(video);
        video.play().catch(() => {});
    }

    setTimeout(addVideo, 2000);
})();
