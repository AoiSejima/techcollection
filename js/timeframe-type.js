// console.log("Is my script working?");

let Airtable = require("airtable");
// console.log(Airtable);

let base = new Airtable({ apiKey: "keyHgmsY3PeOahiOd" }).base(
    "applJFfaZF765xTG2"
);

//get "tech_collection" airtable base, select all the records (records = rows)
// specify function that will recieve the data
base("tech_collection").select({}).eachPage(gotPageOfTechs, gotAllTechs);

// an empty array to hold the our data
// const is another word for var 
const techs = [];

// callback function that receives our data
function gotPageOfTechs(records, fetchNextPage) {
    console.log("gotPageOfTechs()");
    // push(add) the records from this page to our empty array
    techs.push(...records);
    // request more pages
    fetchNextPage();
;}

// call back function that is called when all pages are loaded
function gotAllTechs(err) {
    console.log("gotAllTechs()");
  
    // report an error, you'd want to do something better than this in production
    if (err) {
      console.log("error loading data");
      console.error(err);
      return;
    }
  
    // call functions to log and show the techs
    consoleLogTechs();
    showTechs();
};

// just loop through the techs and console.log them
function consoleLogTechs() {
    console.log("consoleLogTechs()");
    techs.forEach((tech) => {
      console.log("Tech:", tech);
    });
};
  
// loop through airtable data, and display them onto our page
function showTechs() {
    console.log("showTechs()");
    techs.forEach((tech) => {
        // let techTitle = document.createElement("h3");
        // techTitle.innerText = tech.fields.title;
        // document.body.appendChild(techTitle);

        // let techYear = document.createElement("h3");
        // techYear.innerText = tech.fields.year;
        // document.body.appendChild(techYear);

        // creating a new div container for ALL
        let techContainer = document.createElement("div");
        techContainer.classList.add("tech-container");
        document.querySelector(".js-tech-container").appendChild(techContainer);

        // creating a new div container for IMAGE
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        document.querySelector(".js-image-container").appendChild(imageContainer);

        let techImage = document.createElement("img");
        techImage.classList.add("tech-image");
        techImage.src = tech.fields.img[0].url;
        document.body.appendChild(techImage);

        // // creating a new div container for TYPE
        // let techType = document.createElement("h3");
        // techType.classList.add("tech-type");
        // techType.innerText = tech.fields.type;
        // document.querySelector(".js-type-filter").appendChild(typeContainer);
});
}
