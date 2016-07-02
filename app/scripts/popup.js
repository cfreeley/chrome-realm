'use strict';

$(function() {
    var context = {
        character: JSON.parse(localStorage['character'])
    };
    var source = $("#app").html();
    var template = Handlebars.compile(source);
    $("#target").html(template(context));
});