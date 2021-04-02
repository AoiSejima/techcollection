console.log("Tech Collection");

let Airtable = require("airtable");
console.log(Airtable);

let base = new Airtable({ apiKey: "keyHgmsY3PeOahiOd" }).base(
    "applJFfaZF765xTG2"
);

//get "tech_collection" airtable data, specify how to retrieve it
base("tech_collection").select({}).eachPage(gotPageOfTechs, gotAllTechs);

// an empty array to hold the tech data
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
        const h2 = document.createElement("h2");
        h2.innerText = tech.fields.year;
        document.body.appendChild(h2);  

        const h3 = document.createElement("h3");
        h3.innerText = tech.fields.brand;
        document.body.appendChild(h3); 

        const h4 = document.createElement("h4");
        h4.innerText = tech.fields.type;
        document.body.appendChild(h4);  

        const h5 = document.createElement("h5");
        h5.innerText = tech.fields.size;
        document.body.appendChild(h5); 

        const p = document.createElement("p");
        h1.innerText = tech.fields.title;
        document.body.appendChild(p);  

        const img = document.createElement("img");
        img.src = tech.fields.tech_img[0].url;
        document.body.appendChild(img); 

        // let techTitle = document.createElement("h1");
        // techTitle.innerText = tech.fields.tech_title;
        // document.body.appendChild(techTitle);

        // let techYear = document.createElement("h2");
        // techYear.innerText = tech.fields.tech_year;
        // document.body.appendChild(techYear);

        // let techType = document.createElement("h3");
        // techType.innerText = tech.fields.tech_type;
        // document.body.appendChild(techType);

        // let techBrand = document.createElement("h4");
        // techBrand.innerText = tech.fields.tech_brand;
        // document.body.appendChild(techBrand);

        // let techSize = document.createElement("h5");
        // techSize.innerText = tech.fields.tech_size;
        // document.body.appendChild(techSize);

        // let techImage = document.createElement("img");
        // techImage.src = tech.fields.tech_img[0].url;
        // document.body.appendChild(techImage);
});
}
