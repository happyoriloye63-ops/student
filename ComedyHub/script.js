
// ================================
// VIDEO FILES
// ================================

const comedyVideos = {

    "The Funny Neighbor":
        "videos/comedy1.mp4",

    "When Mom Gets Angry":
        "videos/comedy1.mp4",

    "The Office Interview":
        "videos/comedy1.mp4",

    "First Date Disaster":
        "videos/comedy1.mp4"

};


// ================================
// SEARCH COMEDY
// ================================

function searchComedy() {

    const searchInput =
        document.getElementById("searchInput");

    const searchText =
        searchInput.value.toLowerCase().trim();

    const videos =
        document.querySelectorAll(".video-card");


    videos.forEach(video => {

        const title =
            video
                .getAttribute("data-title")
                .toLowerCase();


        if (title.includes(searchText)) {

            video.style.display = "block";

        } else {

            video.style.display = "none";

        }

    });

}


// ================================
// SEARCH WITH ENTER
// ================================

document
    .getElementById("searchInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchComedy();

            }

        }
    );


// ================================
// PLAY VIDEO
// ================================

function playVideo(title) {

    const videoFile =
        comedyVideos[title];


    if (!videoFile) {

        alert("Video not found.");

        return;

    }


    const player =
        document.getElementById("videoPlayer");

    const video =
        document.getElementById("mainVideo");

    const videoTitle =
        document.getElementById("videoTitle");


    videoTitle.textContent = title;

    video.src = videoFile;

    player.style.display = "flex";


    video.play().catch(() => {

        console.log(
            "Click play to start the video."
        );

    });

}


// ================================
// CLOSE VIDEO
// ================================

function closePlayer() {

    const player =
        document.getElementById("videoPlayer");

    const video =
        document.getElementById("mainVideo");


    video.pause();

    video.src = "";

    player.style.display = "none";

}


// ================================
// FEATURED VIDEO
// ================================

function watchFeatured() {

    playVideo(
        "The Funny Neighbor"
    );

}
