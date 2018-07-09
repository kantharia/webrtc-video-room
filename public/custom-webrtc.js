// Get User Media
navigator.getUserMedia =
  navigator.getUserMedia ||
  navigator.mediaDevices.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;
