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
