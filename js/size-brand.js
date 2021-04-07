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
        // const h2 = document.createElement("h3");
        // h3.innerText = tech.fields.year;
        // document.body.appendChild(h3);  

        // let techTitle = document.createElement("h3");
        // techTitle.innerText = tech.fields.title;
        // document.body.appendChild(techTitle);

        // creating a new div container for brand
        let brandContainer = document.createElement("div");
        brandContainer.classList.add("brand-container");
        document.querySelector(".js-brand-container").appendChild(brandContainer);

        let techBrand = document.createElement("h3");
        techBrand.classList.add("tech-brand");
        techBrand.innerText = tech.fields.brand;
        brandContainer.appendChild(techBrand);

        // creating a new div container for image
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        document.querySelector(".js-image-container").appendChild(imageContainer);

        let techImage = document.createElement("img");
        techImage.classList.add("tech-image");
        techImage.src = tech.fields.img[0].url;
        imageContainer.appendChild(techImage);


        // add event listener when user clicks on each brand name
        // other elements will appear or disappear
        brandContainer.addEventListener("click", function(){
            // toggle = light switch
            techBrand.classList.toggle("active");
            techImage.classList.toggle("active");
        });

        // get genre field from airtable, 
        // loop through the array and add each genre as a class to the song container
        let gemColor = tech.fields.color;
        gemColor.forEach(function(color){
            gemContainer.classList.add(color)
        });

        // add event listener to filter (to add an active class to gems)
        let filterRed = document.querySelector(".js-red");
        filterRed.addEventListener("click", function(){

            if (gemContainer.classList.contains("red")) {
                gemContainer.style.display = "block";
            } else {
                gemContainer.style.display = "none";
            }
        });



        // let techSize = document.createElement("h3");
        // techSize.classList.add("tech-size");
        // techSize.innerText = tech.fields.size;
        // techContainer.appendChild(techSize);
});
}