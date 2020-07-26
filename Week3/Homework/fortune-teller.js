"use strict";
const numChildren = [1, 2, 25, 35, 50];
const partnerNames = [
  "Hanna",
  "Marge Simpson",
  "Buffy the vampire slayer",
  "Phoebe Buffay",
  "Lily Aldrin",
];
const locations = ["Amsterdam", "Mars", "Neverland", "Krypton", "Springfield"];
const jobs = [
  "Web developer",
  "P.L.E.A.S.E",
  "Stay at home dad",
  "professional potato pealer",
  "America's got talent judge",
];
function tellFortune(numChildren, partnerNames, locations, jobs) {
  let myNumChildren =
    numChildren[
      Math.floor(Math.random() * numChildren.length)
    ]; /*taking random value from each array */
  let myPartnerNames =
    partnerNames[Math.floor(Math.random() * partnerNames.length)];
  let myLocations = locations[Math.floor(Math.random() * locations.length)];
  let myJobs = jobs[Math.floor(Math.random() * jobs.length)];
  return `You will be ${myJobs} in ${myLocations} married to ${myPartnerNames} with ${myNumChildren} kids!`; /*Function's output*/
}

console.log(
  tellFortune(numChildren, partnerNames, locations, jobs)
); /*You will be Stay at home dad in Krypton married to Buffy the vampire slayer with 35 kids! */
console.log(
  tellFortune(numChildren, partnerNames, locations, jobs)
); /*You will be Web developer in Amsterdam married to Phoebe Buffay with 1 kids!*/
console.log(
  tellFortune(numChildren, partnerNames, locations, jobs)
); /*You will be America's got talent judge in Neverland married to Lily Aldrin with 2 kids! */
