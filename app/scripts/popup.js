'use strict';

$(function() {
    chrome.browserAction.setBadgeText({ text: "" });
    //init();
    var context = {
        character: JSON.parse(localStorage['character'])
    };
    var source = $("#menu").html();
    var template = Handlebars.compile(source);
    $("#target").html(template(context));
});