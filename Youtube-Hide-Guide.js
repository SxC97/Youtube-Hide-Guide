// ==UserScript==
// @name        Youtube-Hide-Guide
// @description Auto hide the guide button on Youtube
// @match       *://*.youtube.com/*
// @run-at      document-end
// ==/UserScript==

document.getElementById('guide-button').click();
