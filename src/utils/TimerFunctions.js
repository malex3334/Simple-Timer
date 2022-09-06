// format time S => M:SS
export const secTohuman = function (seconds) {
  let sec = seconds % 60;
  let min = parseInt(seconds / 60);
  if (sec.toString().length === 1) {
    // padding
    sec = "0" + sec;
  }
  return min + ":" + sec;
};

// add and substract time values - buttons
export const editTimers = function (target, operation, step, min) {
  switch (operation) {
    case "subs":
      target((prev) => (prev > min ? prev - step : min));
      break;
    case "add":
      target((prev) => prev + step);
      break;
  }
};

// countdown function - useState set
export const updateValues = function (operator) {
  operator((prev) => prev - 1);
};

//  sound function
export const playSound = function (operator, soundType = "ring") {
  let sound;
  if (operator) {
    if (soundType === "ring") {
      sound = new Audio(
        "https://www.myinstants.com/media/sounds/boxing-bell.mp3"
      );
    }
    if (soundType === "gong") {
      sound = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_bd82584fc4.mp3?filename=gong_center_clear-93480.mp3"
      );
    }

    //   'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2b08b6e711.mp3?filename=ship-bell-single-ring-81833.mp3'

    sound.volume = 0.6;
    sound.play();
    setTimeout(() => {
      sound = null;
    }, 1);
  } else {
    return;
  }
};
