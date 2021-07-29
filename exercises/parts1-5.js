"use strict";
exports.__esModule = true;
var SpaceLocation_1 = require("./SpaceLocation");
//let spacecraftName: string = 'Determination';
//let speedMph: number = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
//let milesPerKilometer: number = 0.621;
//days to mars variables
// let milesToMars: number = kilometersToMars * milesPerKilometer;
// let hoursToMars: number = milesToMars / speedMph;
// let daysToMars: number = hoursToMars / 24;
//console.log(`The ${spacecraftName} will arrive to Mars in ${getDaysToLocation(kilometersToTheMoon)} days.`);
// Part 4: Create a Spacecraft Class
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hoursToLocation = milesAway / this.speedMph;
        return hoursToLocation / 24;
    };
    Spacecraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation_1.SpaceLocation('the Moon', kilometersToTheMoon));
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
