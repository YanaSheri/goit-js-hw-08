import Player from "@vimeo/player";
import LodashThrottle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};

player.on('timeupdate', LodashThrottle(onPlay, 1000));

const data = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(data);
