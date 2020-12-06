// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var myAudio = document.getElementById("myAudio");
var ctrlTxt = document.getElementById("controls")
var isPlaying = false;

document.getElementById("player").addEventListener("click", togglePlay);

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  ctrlTxt.innerHTML = "Pause";
};
myAudio.onpause = function() {
  isPlaying = false;
  ctrlTxt.innerHTML = "Resume";
};