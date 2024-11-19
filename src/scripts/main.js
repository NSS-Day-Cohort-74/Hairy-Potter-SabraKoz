// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 3, 5)
let platter = makePottery("Platter", 4, 1)
let vase = makePottery("Vase", 7, 8)
let bowl = makePottery("Bowl", 6, 4)
let pitcher = makePottery("Pitcher", 9, 7)

const pottery = makePottery(mug, platter, vase, bowl, pitcher);
console.log(pottery)
// Fire each piece of pottery in the kiln
let mugFired = firePottery(mug, 2000);
let platterFired = firePottery(platter, 2300);
let vaseFired = firePottery(vase, 2100);
let bowlFired = firePottery(bowl, 1900);
let pitcherFired = firePottery(pitcher, 2400);

const potteryFired = firePottery(mugFired, platterFired, vaseFired, bowlFired, pitcherFired);
console.log(potteryFired)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

