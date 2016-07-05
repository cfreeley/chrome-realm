'use strict';

// not sure what this does
chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

var start = function(e) {

    // If character doesn't exist, start over
    if(true || !localStorage['character']) {
        init();
        setAlarm();
    }

    var action = localStorage.action;
      
    //chrome.browserAction.setIcon({"path":"/images/"+location+ ".png"});

    console.log('start');
    //chrome.alarms.create("", {"delayInMinutes":1});
};

var setAlarm = function(e) {
    chrome.alarms.create("", {"delayInMinutes":.1});
    return;
    if(localStorage['action'] == "fishing")
        chrome.alarms.create("", {"delayInMinutes":fishAlarm()});
    else if(localStorage['action'] == "hunting")
        chrome.alarms.create("", {"delayInMinutes":huntAlarm()});
    else if(localStorage['action'] == "mining")
        chrome.alarms.create("", {"delayInMinutes":mineAlarm()});
};

var encounter = function(e) {
    chrome.browserAction.setBadgeText({ text: "!" });
    setAlarm();
    init();
    //chrome.browserAction.setIcon({"path":"/images/icon!.png"});
    chrome.browserAction.setPopup({"popup":"/html/encounter.html"});
    var opt = {
        type: "basic",
        title: "Wild Pokemon Appeared!",
        message: "Select the \"!\" icon in your browser to battle!",
        iconUrl: "/images/notification.png"
    };
  if (localStorage['notifications'] != "off") {
        chrome.notifications.create("poke", opt, function () {});
        console.log(localStorage['notifications'] != "off");
    }
    else {
        chrome.notifications.clear("",function(e){});
        console.log("um");
    }
    if (localStorage['sound'] == "on") {
        var aud = new Audio('http://50.7.60.82:777/ost/pokemon-gameboy-sound-collection/fllwdebjsg/107-battle-vs-wild-pokemon-.mp3#t=,4.7');
        aud.play();
    }
};

document.addEventListener('DOMContentLoaded', function () {
    start();
});

var init = function() {
    localStorage['settings'] = JSON.stringify({
        notifications: 1,
        sound: 0
    });
    var island = generateIsland();
    console.log(island);
    localStorage['character'] = JSON.stringify({
        dollars:0, 
        inventory:{},
        location:island 
    });
    localStorage['islands'] = JSON.stringify({});
};

chrome.alarms.onAlarm.addListener(encounter);