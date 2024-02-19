const playlist = [
    { title: "Boomboxhead-BigTipper", url: "2023/Boomboxhead-BigTipper.mp3" },
    { title: "Boomboxhead-BleepsAndBloops", url: "2023/Boomboxhead-BleepsAndBloops.mp3" },
    { title: "Boomboxhead-CameUp", url: "2023/Boomboxhead-CameUp.mp3" },
    { title: "Boomboxhead-ContententNumber2", url: "2023/Boomboxhead-ContententNumber2.mp3" },
    { title: "Boomboxhead-DontMatter", url: "2023/Boomboxhead-DontMatter.mp3" },
    { title: "Boomboxhead-GoGetTheBag", url: "2023/Boomboxhead-GoGetTheBag.mp3" },
    { title: "Boomboxhead-GoGetTheBagVocaloid", url: "2023/Boomboxhead-GoGetTheBagVocaloid.mp3" },
    { title: "Boomboxhead-GoingAway", url: "2023/Boomboxhead-GoingAway.mp3" },
    { title: "Boomboxhead-GotItOutTheDirt", url: "2023/Boomboxhead-GotItOutTheDirt.mp3" },
    { title: "Boomboxhead-HardHitter", url: "2023/Boomboxhead-HardHitter.mp3" },
    { title: "Boomboxhead-JohnnyDang", url: "2023/Boomboxhead-JohnnyDang.mp3" },
    { title: "Boomboxhead-NoMore", url: "2023/Boomboxhead-NoMore.mp3" },
    { title: "Boomboxhead-OutOfHere", url: "2023/Boomboxhead-OutOfHere.mp3" },
    { title: "Boomboxhead-PianoMan", url: "2023/Boomboxhead-PianoMan.mp3" },
    { title: "Boomboxhead-PuttingWorkInTheMetaverseInstrumental", url: "2023/Boomboxhead-PuttingWorkInTheMetaverseInstrumental.mp3" },
    { title: "Boomboxhead-SpaceKnock", url: "2023/Boomboxhead-SpaceKnock.mp3" },
    { title: "Boomboxhead-Stardust-OnChain", url: "2023/Boomboxhead-Stardust-OnChain.mp3" },
    { title: "Boomboxhead-ThankGodIMadeIt", url: "2023/Boomboxhead-ThankGodIMadeIt.mp3" },
    { title: "Boomboxhead-ThingsAboutYou", url: "2023/Boomboxhead-ThingsAboutYou.mp3" },
    { title: "Boomboxhead-WAGMI", url: "2023/Boomboxhead-WAGMI.mp3" },
    { title: "Boomboxhead-Whammer", url: "2023/Boomboxhead-Whammer.mp3" },
    { title: "Boom - Connect", url: "2024-Feb/Boom - Connect.mp3" },
    { title: "boom - DOPEBEAT2", url: "2024-Feb/boom - DOPEBEAT2.mp3" },
    { title: "Boom - Drumline", url: "2024-Feb/Boom - Drumline.mp3" },
    { title: "boom - dumdumdum_instrumental", url: "2024-Feb/boom - dumdumdum_instrumental.mp3" },
    { title: "boom - hit", url: "2024-Feb/boom - hit.mp3" },
    { title: "boom - notbetterontheotherside", url: "2024-Feb/boom - notbetterontheotherside.mp3" },
    { title: "boom - only up", url: "2024-Feb/boom - only up.mp3" },
    { title: "boom - pipes", url: "2024-Feb/boom - pipes.mp3" },
    { title: "boom - Ripper", url: "2024-Feb/boom - Ripper.mp3" },
    { title: "Boom - Roll", url: "2024-Feb/Boom - Roll.mp3" },
    { title: "boom - smoke", url: "2024-Feb/boom - smoke.mp3" },
    { title: "boom - UHUH", url: "2024-Feb/boom - UHUH.mp3" },
    { title: "boom-hot-potato", url: "2024-Feb/boom-hot-potato.mp3" },
    { title: "sound design - aliens", url: "SFX/sound design - aliens.mp3" },
];

const audioPlayer = document.getElementById('audioPlayer');
const playlistElement = document.getElementById('playlist');

playlist.forEach((beat, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = beat.title;

    const downloadBtn = document.createElement('button');
    downloadBtn.textContent = 'D';
    downloadBtn.className = 'download-btn';
    downloadBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the list item click event
        downloadTrack(beat.url, beat.title);
    });

    listItem.appendChild(downloadBtn);
    listItem.addEventListener('click', () => {
        audioPlayer.src = beat.url;
        audioPlayer.play();
    });

    playlistElement.appendChild(listItem);
});

function downloadTrack(url, title) {
    const link = document.createElement('a');
    link.href = url;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
