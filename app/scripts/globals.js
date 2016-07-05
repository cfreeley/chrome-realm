var chance = new Chance();

// Generators

var generateIsland = function () {
    return capitalize(chance.word());
};

// Alarms

var fishAlarm = function() {
    return chance.integer({min: 0, max: 10}); 
};

var huntAlarm = function() {
    return chance.integer({min: 0, max: 60}); 
};

var mineAlarm = function() {
    return chance.integer({min: 0, max: 480}); 
};

// Miscellanous Utils

var capitalize = function(s) {
    return s[0].toUpperCase() + s.slice(1);
}