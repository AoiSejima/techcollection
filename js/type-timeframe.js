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

    try {
        showTechs();
    } catch (e) {
        console.error(e);
    }
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

        // creating a new div container for EACH tech item
        // haven't added to the page yet by appending
        let techContainer = document.createElement("div");
        techContainer.classList.add("tech-container");

        // creating a new tech-img elemtnt
        let techImage = document.createElement("img");
        techImage.classList.add("tech-image");
        techImage.src = tech.fields.img[0].url;
        // adding the image to the tech container
        techContainer.appendChild(techImage);

        let techYear = tech.fields.year;

        let techType = tech.fields.type;

        // adding techType as a class to each tech container
        // clicking amazon would only add amazon products to the container
        techContainer.classList.add(techType);

        if (techYear == '1964') {
            document.querySelector(".y_1964").appendChild(techContainer);
        }
        if (techYear == '1983') {
            document.querySelector(".y_1983").appendChild(techContainer);
        }
        if (techYear == '1984') {
            document.querySelector(".y_1984").appendChild(techContainer);
        }
        if (techYear == '1985') {
            document.querySelector(".y_1985").appendChild(techContainer);
        }
        if (techYear == '1991') {
            document.querySelector(".y_1991").appendChild(techContainer);
        }
        if (techYear == '1994') {
            document.querySelector(".y_1994").appendChild(techContainer);
        }
        if (techYear == '2004') {
            document.querySelector(".y_2004").appendChild(techContainer);
        }
        if (techYear == '2006') {
            document.querySelector(".y_2006").appendChild(techContainer);
        }
        if (techYear == '2007') {
            document.querySelector(".y_2007").appendChild(techContainer);
        }
        if (techYear == '2010') {
            document.querySelector(".y_2010").appendChild(techContainer);
        }
        if (techYear == '2012') {
            document.querySelector(".y_2012").appendChild(techContainer);
        }
        if (techYear == '2013') {
            document.querySelector(".y_2013").appendChild(techContainer);
        }
        if (techYear == '2014') {
            document.querySelector(".y_2014").appendChild(techContainer);
        }
        if (techYear == '2015') {
            document.querySelector(".y_2015").appendChild(techContainer);
        }
        if (techYear == '2016') {
            document.querySelector(".y_2016").appendChild(techContainer);
        }
        if (techYear == '2017') {
            document.querySelector(".y_2017").appendChild(techContainer);
        }
        if (techYear == '2018') {
            document.querySelector(".y_2018").appendChild(techContainer);
        }
        if (techYear == '2019') {
            document.querySelector(".y_2019").appendChild(techContainer);
        }
        if (techYear == '2020') {
            document.querySelector(".y_2020").appendChild(techContainer);
        }
        if (techYear == '2021') {
            document.querySelector(".y_2021").appendChild(techContainer);
        }
        if (techYear == 'N/A') {
            document.querySelector(".y_NA").appendChild(techContainer);
        }

        document.querySelector(".click-phone").addEventListener("click", function () {

            if (techContainer.classList.contains("phone")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-tablet").addEventListener("click", function () {

            if (techContainer.classList.contains("tablet")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-computer").addEventListener("click", function () {

            if (techContainer.classList.contains("computer")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-keyboard").addEventListener("click", function () {

            if (techContainer.classList.contains("keyboard")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-mouse").addEventListener("click", function () {

            if (techContainer.classList.contains("mouse")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-watch").addEventListener("click", function () {

            if (techContainer.classList.contains("watch")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-game").addEventListener("click", function () {

            if (techContainer.classList.contains("game")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
        document.querySelector(".click-music").addEventListener("click", function () {

            if (techContainer.classList.contains("music")){
                  techContainer.style.display = "flex";
                } else {
                  techContainer.style.display = "none";
                }

        })
});
}
