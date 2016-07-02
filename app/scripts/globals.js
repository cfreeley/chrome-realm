var chance = new Chance();

var generateIsland = function () {
    return chance.word();
};

var fishAlarm = function() {
    return chance.integer({min: 0, max: 10}); 
};

var huntAlarm = function() {
    return chance.integer({min: 0, max: 60}); 
};

var mineAlarm = function() {
    return chance.integer({min: 0, max: 480}); 
};